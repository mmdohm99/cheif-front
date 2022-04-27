import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../style/show.module.css";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";
import EditRecipe from "./editRecipe";
import { UserContext } from "../components/recipesModule";
export default function ShowRecipe() {
  const [modalShow, setModalShow] = useState(false);
  const { recipes, handleDelete } = useContext(UserContext);
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const recipe = recipes.find((recipe) => recipe._id === id);
    setRecipe(recipe);
  }, [recipes, id]);

  return (
    <>
      <div className={styles.nav}>
        <span className={styles.logo}>Chef's Warehouse</span>

        <button
          className={styles.btn}
          onClick={() => {
            navigate("/");
          }}
        >
          Back to HomePage
        </button>
      </div>
      <div className={styles.container}>
        <Card className={styles.card}>
          <Card.Title className={styles.title}>{recipe?.title}</Card.Title>
          <Card.Img src={recipe?.image} className={styles.image} alt="recipe" />
          <Card.Body>
            <Card.Text>ingredients : {recipe?.ingredient}</Card.Text>
            <Card.Text>Recipe : {recipe?.recipe}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <button
              className={styles.btn}
              onClick={() => {
                handleDelete(recipe._id);
                navigate("/");
              }}
            >
              Delete Recipe
            </button>
            <button onClick={() => setModalShow(true)} className={styles.btn}>
              Edit Recipe
            </button>
            <EditRecipe
              recipe={recipe}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}
