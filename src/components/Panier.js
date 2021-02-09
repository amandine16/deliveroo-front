import PanierContent from "./PanierContent";
import Total from "./Total";

const Panier = ({ product, setProduct }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Panier">
      <div className="panierContent">
        <form onSubmit={handleSubmit}></form>
        {/* btn valider le panier */}
        <div
          className={
            product.length > 0 ? "btn-panier validate" : " btn-panier disabled"
          }
        >
          <button>Valider mon panier</button>
        </div>
        {/* details du panier */}
        {product.length > 0 && (
          <>
            <div className="listeProducts">
              {product.map((elem, index) => {
                return (
                  <>
                    <PanierContent
                      product={product}
                      elem={elem}
                      setProduct={setProduct}
                      index={index}
                    />
                  </>
                );
              })}
            </div>

            <div className="totalContent">
              {/* Sous total du panier */}
              <Total product={product} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Panier;
