const Panier = () => {
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
        <div className="content-panier">Mon panier est vide</div>
      </div>
    </div>
  );
};

export default Panier;
