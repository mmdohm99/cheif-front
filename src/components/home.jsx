import React, { useContext, useState } from "react";
import classes from "../style/home.module.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../components/recipesModule";
import AddRecipe from "./AddRecipe";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const { recipes, handleDelete } = useContext(UserContext);

  return (
    <>
      <div className={classes.nav}>
        <span className={classes.logo}>Chef's Warehouse</span>

        <button className={classes.btn} onClick={() => setModalShow(true)}>
          Add New Recipe
        </button>
        <AddRecipe show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <div className={classes.container}>
        {recipes?.map((recipe) => (
          <Card className={classes.card} key={recipe._id}>
            <Card.Img
              src={recipe?.image}
              className={classes.image}
              alt="recipe"
            />
            <Card.Body>
              <Card.Title className={classes.title}>{recipe.title}</Card.Title>
              <Card.Text className={classes.ingredient}>
                {recipe.ingredient.substring(0, 24) + " ..."}
              </Card.Text>
              <Card.Text className={classes.recipe}>
                {recipe.recipe.substring(0, 24) + " ..."}{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer className={classes.footer}>
              <button
                className={classes.fbtn}
                onClick={() => handleDelete(recipe._id)}
              >
                Delete Recipe
              </button>

              <button
                className={classes.fbtn}
                onClick={() => {
                  navigate(`/recipe/${recipe._id}`);
                }}
              >
                More Details
              </button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </>
  );
}
export default Home;
