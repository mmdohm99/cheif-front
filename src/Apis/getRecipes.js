import axios from "axios";

export const getRecipes = async () => {
  const res = await axios.get("https://cheifback.herokuapp.com/recipes");
  return res?.data;
};
