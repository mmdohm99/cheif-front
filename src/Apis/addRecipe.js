import axios from "axios";

export const addRecipes = async (data) => {
  await axios.post("http://localhost:4000/recipes", data);
};
