const User = require("../../models/user");

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await User.create({
      username,
      password,
      email,
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email and Password is required" });
  try {
    const foundUser = await User.findOne({ email }).exec();
    const user = await User.findById(foundUser?.id, "-password");
    if (!foundUser) return res.status(400).json({ error: "User not found" });
    const match = password === foundUser.password;
    if (!match)
      return res.status(401).json({ error: "Wrong email or password " });
    return res.status(200).json({ user });
  } catch (error) {
    res.status(400).json(err);
  }
};
