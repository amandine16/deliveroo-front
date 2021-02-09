import popularSvg from "../assets/img/popularSvg.svg";

const OneCard = ({ meal, product, setProduct, isPresent, setIsPresent }) => {
  const handleClick = (meal) => {
    // isPresent est ma variable pour tester si l'id du meal est deja présent dans le state
    let newMeal = {
      name: meal.title,
      price: meal.price,
      qty: 1,
      id: meal.id,
    };
    // je copie mon tableau d'objets products
    const newTab = [...product];
    console.log(newTab);
    // Je boucle sur mon tableau, pour voir si l'id du produit selectionné existe
    for (let i = 0; i <= newTab.length - 1; i++) {
      if (newTab[i].id === meal.id) {
        console.log("deja present");
        // Je récupère l'index auquel mon produit se trouve dans mon tableau
        setIsPresent(i); //is present récupère l'index du meal
        console.log(isPresent);
      }
    }
    if (!isPresent) {
      console.log("le produit n'existe pas deja");
      // je l'ajoute alors à mon state
      newTab.push(newMeal);
      setProduct(newTab);
    } else {
      // si existe deja, j'incrémente la clef qty
      // console.log(newTab);
      // newMeal.qty = newMeal.qty + 1;
      // console.log(newMeal.qty);
      // console.log(newTab);
      // newTab[isPresent].qty = newTab[isPresent].qty + 1;
      // setProduct(newTab);
      // console.log(newTab);
      console.log("existe deja");
    }
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
