import { useState } from "react";

const PanierContent = ({ product }) => {
  // initialisation du state counter
  // const [counter, setCounter] = useState(0);

  return (
    // si des produits sont présents dans le panier, je les affiches
    <div className="PanierContent" id={1}>
      <div className="counter">
        <span>+</span>
        <span>0</span>
        <span>-</span>
      </div>
      <div className="name-panier">{product.title}</div>
      <div className="price-panier"> € </div>
    </div>
  );
};

export default PanierContent;
