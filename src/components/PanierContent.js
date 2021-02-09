// import { useState } from "react";

const PanierContent = ({ product }) => {
  // initialisation du state counter
  // const [counter, setCounter] = useState(0);
  return (
    // si des produits sont présents dans le panier, je les affiches
    <div className="PanierContent" id={1}>
      <div className="counter">
        <span>+</span>
        <span>{product.qty}</span>
        <span>-</span>
      </div>
      <div className="name-panier">{product.name}</div>
      <div className="price-panier">{product.price}€ </div>
    </div>
  );
};

export default PanierContent;
