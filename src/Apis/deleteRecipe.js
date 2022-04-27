import axios from "axios";

export const deleteRecipe = async (id) => {
  await axios.delete(`http://localhost:4000/recipes/${id}`);
};
