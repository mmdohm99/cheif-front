import axios from "axios";

export const addRecipes = async (data) => {
  await axios.post("https://cheifback.herokuapp.com/recipes", data);
};
