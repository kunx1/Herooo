import axios from "axios";
import { TOKEN, BASE_URL } from "./constants";

const getHeroById = async (id) => {
  const url = `${BASE_URL}${TOKEN}/${id}`;
  const res = await axios.get(url);
  const respuesta = await res.data;
  return respuesta;
};

const getByName = async (name) => {
  const url = `${BASE_URL}/${TOKEN}/search/${name}`;
  const res = await axios.get(url);
  const respuesta = await res.data;
  return respuesta;
};

const Hero = {
  getHeroById: getHeroById,
  getByName: getByName,
};

export default Hero;
