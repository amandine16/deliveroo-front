import PanierContent from "./PanierContent";

const Panier = ({ products, setProducts }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Panier">
      <div className="cart">
        <form onSubmit={handleSubmit}></form>
        {/* btn valider le panier */}
        <div className="btn-panier">
          <input type="text" placeholder="Valider mon panier" />
        </div>
        {/* details du panier */}
        {/* Test si le produit est deja présent dans mon tableau products */}

        {products.map((product, index) => {
          // console.log(products);
          // console.log(products[0].id);
          // Je test si l'id est deja présent dans mon panier, seulement dans le cas où il y a au moins 2 articles dans mon panier
          // if (products.length >= 2) {
          //   for (let i = 0; i < products.length; i++) {
          //     if (i !== products.length - 1) {
          //       if (products[i].id === products[i + 1].id) {
          //         console.log("id existant");
          //       } else {
          return <PanierContent product={product} key={index} />;
          //         }
          //       }
          //     }
          //   }
        })}
      </div>
    </div>
  );
};

export default Panier;
