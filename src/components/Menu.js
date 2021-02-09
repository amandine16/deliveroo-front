import OneCard from "./OneCard";

const Menu = ({ category, product, setProduct, isPresent, setIsPresent }) => {
  return (
    //   si la catégorie n'est pas vide, je l'affiche
    category.meals.length !== 0 && (
      <div className="oneCategory-menu">
        <h2>{category.name}</h2>
        <div>
          {/* dans chaque catégorie, je map sur le contenu de chaque catégories */}
          {category.meals.map((meal, i) => {
            return (
              <OneCard
                meal={meal}
                key={i}
                product={product}
                setProduct={setProduct}
                isPresent={isPresent}
                setIsPresent={setIsPresent}
              />
            );
          })}
        </div>
      </div>
    )
  );
};

export default Menu;
