import OneCard from "./OneCard";

const Menu = ({ data }) => {
  return (
    <div className="Menu">
      {data.categories.map((category, i) => {
        return (
          //   si la catégorie n'est pas vide, je l'affiche
          category.meals.length !== 0 && (
            <div className="oneCategory-menu">
              <h2>{category.name}</h2>
              <div>
                {category.meals.map((meal, i) => {
                  return <OneCard meal={meal} />;
                })}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Menu;
