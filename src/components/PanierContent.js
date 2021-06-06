// import { useState } from "react";
import PlusIcon from "./PlusIcon";
import MoinsIcon from "./MoinsIcon";

const PanierContent = ({ product, elem, setProduct, index }) => {
  // initialisation du state counter
  // const [counter, setCounter] = useState(0);

  return (
    // si des produits sont présents dans le panier, je les affiches

    <div className="items">
      <div className="counter">
        <span
          className="increment"
          onClick={() => {
            console.log(index);
            const newTab = [...product];
            console.log(newTab);
            newTab[index].qty++;
            setProduct(newTab);
          }}
        >
          <PlusIcon size={20} style={{ cursor: "pointer", color: "#00CEBD" }} />
        </span>
        <span>{elem.qty}</span>
        <span
          className="decrement"
          onClick={() => {
            console.log(index);
            const newTab = [...product];
            console.log(newTab);
            newTab[index].qty--;
            if (newTab[index].qty <= 0) {
              newTab.splice(index, 1)
            }
            setProduct(newTab);
          }}
        >
          <MoinsIcon
            size={20}
            style={{ cursor: "pointer", color: "#00CEBD" }}
          />
        </span>
      </div>
      <div className="name-panier">{elem.name}</div>
      <div className="price-panier">{elem.price}€ </div>
      <div className="line"></div>
    </div>
  );
};

export default PanierContent;
