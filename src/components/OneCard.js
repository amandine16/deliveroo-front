import popularSvg from "../assets/img/popularSvg.svg";
const OneCard = ({ meal, product, setProduct }) => {
  const handleClick = (meal) => {
    // variable qui va me permettre de switché en fonction de si le produit existe deja dans le panier
    let isFound = false;
    // je copie mon tableau
    const newTab = [...product];
    // boucle qui test si l'id du produit cliqué est présent dans mon panier
    for (let i = 0; i < newTab.length; i++) {
      if (newTab[i].id === meal.id) {
        // S'il le produit est présent, je passe à true isFound
        isFound = true;
        console.log("deja present");
        // j'augmente ma quantité
        newTab[i].qty++;
      }
    }
    //Si l'id n'est pas deja présent
    if (!isFound) {
      console.log("le produit n'existe pas deja");
      // Je crée un nouvel objet qui contient ma clef qty
      let newMeal = {
        name: meal.title,
        price: meal.price,
        qty: 1,
        id: meal.id,
      };
      newTab.push(newMeal);
    }
    setProduct(newTab);
  };

  return (
    <div
      className="oneCard-menu"
      id={meal.id}
      onClick={() => {
        handleClick(meal);
      }}
    >
      <div className="left" style={{ width: !meal.picture && "100%" }}>
        {/* titre */}
        <div className="card-text">
          <h3>{meal.title}</h3>
          <p>{meal.description && meal.description.slice(0, 50) + "..."}</p>
        </div>
        {/* prix */}
        <div className="card-infos">
          <p>{meal.price} €</p>
          {meal.popular && (
            <span className="popular">
              <img src={popularSvg} alt={meal.title} />
              Populaire
            </span>
          )}
        </div>
      </div>
      {/* picture */}
      {meal.picture && (
        <div className="right">
          {" "}
          <img src={meal.picture} alt={meal.title} />
        </div>
      )}
    </div>
  );
};

export default OneCard;
