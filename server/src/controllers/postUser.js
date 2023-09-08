const { User } = require("../DB_connection");
const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) res.status(400).send("Faltan datos");
    //Cuando hay que mandar un string va send
    const user = await User.findOrCreate({
      where: {
        email,
        password,
        // La funcion encuentra o crea que email o password coincidan
      },
    });
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = postUser;
