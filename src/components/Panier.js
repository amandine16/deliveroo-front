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
        {products.map((product, index) => {
          return <PanierContent product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Panier;
