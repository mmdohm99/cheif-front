import React, { useState, useContext, useCallback } from "react";
import classes from "../style/add.module.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { addRecipes } from "../Apis/addRecipe";
import { getRecipes } from "../Apis/getRecipes";
import { UserContext } from "./recipesModule";

export default function AddRecipe(props) {
  const { setRecipes } = useContext(UserContext);
  const [newRecipe, setnewRecipe] = useState({
    title: "",
    ingredient: "",
    recipe: "",
    image: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    const file = e.target.files;
    setnewRecipe((currentrecipe) => {
      if (name === "image") {
        return { ...currentrecipe, [name]: file };
      }
      return { ...currentrecipe, [name]: value };
    });
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      const formData = new FormData();
      if (
        newRecipe.title === "" ||
        newRecipe.ingredient === "" ||
        newRecipe.recipe === "" ||
        newRecipe.image === ""
      ) {
        e.preventDefault();
        alert("Please fill all the fields");
      } else {
        e.preventDefault();
        formData.append("image", newRecipe.image[0]);
        formData.append("title", newRecipe.title);
        formData.append("ingredient", newRecipe.ingredient);
        formData.append("recipe", newRecipe.recipe);
        addRecipes(formData).then(() => {
          getRecipes().then(setRecipes);
        });
      }
    },
    [newRecipe, setRecipes]
  );

  return (
    <Modal
      className={classes.modal}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={classes.head} closeButton>
        <Modal.Title
          className={classes.title}
          id="contained-modal-title-vcenter"
        >
          Add New Recipe
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={classes.body}>
        <Form onSubmit={handleSubmit} className="form-control">
          <div className={classes.body}>
            <label className={classes.body}>Title</label>
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Enter Title"
              value={newRecipe.title}
              onChange={handleChange}
            />
          </div>
          <div className={classes.body}>
            <label>Ingredient</label>
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              name="ingredient"
              placeholder="Enter ingredients"
              value={newRecipe.ingredient}
              onChange={handleChange}
            />
          </div>
          <div className={classes.body}>
            <label>Recipe</label>
          </div>
          <div>
            <textarea
              className="form-control"
              type="text"
              name="recipe"
              placeholder="Enter recipe"
              value={newRecipe.recipe}
              onChange={handleChange}
            />
          </div>
          <div className={classes.body}>
            <label>Image</label>
          </div>
          <div>
            <input
              className="form-control"
              type="file"
              name="image"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Add Recipe"
              onClick={() => {
                if (
                  newRecipe.title !== "" &&
                  newRecipe.ingredient !== "" &&
                  newRecipe.recipe !== "" &&
                  newRecipe.image !== ""
                ) {
                  props.onHide();
                }
              }}
              className="form-control"
              style={{ fontWeight: "bold", color: "#502d05" }}
            />
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
