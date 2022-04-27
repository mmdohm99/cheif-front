import axios from "axios";

export const editRecipe = async (id, data) => {
  await axios.patch(`https://cheifback.herokuapp.com/recipes/${id}`, data);
};
