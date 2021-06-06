const Total = ({ product }) => {
  let sousTotal = 0;
  for (let i = 0; i < product.length; i++) {
    sousTotal += Number(product[i].price) * product[i].qty;
  }
  let livraison = 2.5;
  let total = sousTotal + livraison;
  return (
    <div className="TotalItems">
      <div className="sousTotal">
        <div>Sous-total</div>
        <div>{sousTotal}€</div>
      </div>
      <div className="livraison">
        <div>Frais de livraison</div>
        <div>{livraison} €</div>
      </div>
      <div className="line"></div>
      <div className="total">
        <div>Total</div>
        <div>{total} €</div>
      </div>
    </div>
  );
};

export default Total;
