const AllCategory = ({ data }) => {
  return (
    <div className="AllCategory">
      {data.categories.map((category, i) => {
        return (
          <div className="oneCategory">
            <p>{category.name}</p>
            {category.meals.map((meal, i) => {
              return (
                <div className="onMeal">
                  <p>{meal.price}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AllCategory;
