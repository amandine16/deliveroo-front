import { useState } from "react";
import Menu from "./Menu";
import Panier from "./Panier";

const Content = ({ data }) => {
  // Crée un state qui va stocker les infos de la card cliquée
  const [product, setProduct] = useState([]);

  return (
    <div className="Content ">
      <div className="container d-flex">
        <div className="Menu">
          {data.map((category, i) => {
            return (
              <Menu
                category={category}
                key={i}
                product={product}
                setProduct={setProduct}
              />
            );
          })}
        </div>
        <Panier products={product} setProducts={setProduct} />
      </div>
    </div>
  );
};

export default Content;
