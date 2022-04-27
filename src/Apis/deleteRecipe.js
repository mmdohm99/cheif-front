import axios from "axios";

export const deleteRecipe = async (id) => {
  await axios.delete(`https://cheifback.herokuapp.com/recipes/${id}`);
};
