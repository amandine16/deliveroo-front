import OneCard from "./OneCard";

const Menu = ({ category, product, setProduct }) => {
  return (
    //   si la catégorie n'est pas vide, je l'affiche
    category.meals.length !== 0 && (
      <div className="MenuItems">
        <h2>{category.name}</h2>
        <div className="MenuItems--items">
          {/* dans chaque catégorie, je map sur le contenu de chaque catégories */}
          {category.meals.map((meal, i) => {
            return (
              <OneCard
                meal={meal}
                key={i}
                product={product}
                setProduct={setProduct}
              />
            );
          })}
        </div>
      </div>
    )
  );
};

export default Menu;
