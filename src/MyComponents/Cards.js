import React from "react";
import "../CSScomponents/CardsCSS.css";

const Cards = ({ item, handleClick }) => {
  const { title, description, price, images, discountPercentage, rating, brand, category } = item;

  const handleAddToCart = () => {
    handleClick(item);
    alert(`${title} added to cart!`);
  };

  return (
    <div className="cards">
      <div className="image_box">
        <img src={images} alt="Image" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{description}</p>
        <p>Price - {price}Rs</p>
        <p>Discount - {discountPercentage}%</p>
        <p>Rating - {rating}/5</p>
        <p>Brand - {brand}</p>
        <p>Category - {category}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
