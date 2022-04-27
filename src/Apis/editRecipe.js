import axios from "axios";

export const editRecipe = async (id, data) => {
  await axios.patch(`http://localhost:4000/recipes/${id}`, data);
};
