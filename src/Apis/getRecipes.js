import axios from "axios";

export const getRecipes = async () => {
  const res = await axios.get("http://localhost:4000/recipes");
  return res?.data;
};
