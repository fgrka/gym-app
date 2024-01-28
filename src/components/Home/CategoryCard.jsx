
const CategoryCard = ({data, onCategoryClick}) => {
 
     return (
        <div className="categories">
            {data.map((category, key) => 
                <div className="category-card" onClick={() => onCategoryClick(category)} key={key}>{category}</div>
            )}
        </div>
    );
};

export default CategoryCard;