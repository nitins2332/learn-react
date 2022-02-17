import React from "react";
import "./Recipe.css";

function Recipes({ title, calories, image, ingredients }) {
  return (
    <div className="recipe">
      <h2>THis is {title}</h2>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className="image" src={image} alt="" />
    </div>
  );
}

export default Recipes;
