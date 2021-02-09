import popularSvg from "../assets/img/popularSvg.svg";

const OneCard = ({ meal, product, setProduct }) => {
  const handleClick = (meal) => {
    // copie du state
    const newTab = [...product]; //id:1, id:2
    // je test si l'objet meal n'est pas deja présent dans mmon newTab
    if (newTab.indexOf(meal) === -1) {
      // S'il est pas présent, je l'ajoute
      newTab.push(meal);
      setProduct(newTab);
    } else {
      // sinon j'incrémente mon compteur
      console.log("deja dedans");
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
