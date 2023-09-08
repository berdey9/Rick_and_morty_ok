const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(URL + id);
    if (data.name) {
      const character = {
        id: data.id,
        name: data.name,
        species: data.species,
        origin: data.origin,
        image: data.image,
        gender: data.gender,
        status: data.status,
      };
      return res.status(200).json(character);
    }
    return res.status(404).send("Not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getCharById;
