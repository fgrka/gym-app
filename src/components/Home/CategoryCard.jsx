import { useNavigate } from "react-router-dom";
import fetchData from "../../utils/fetchData";
 

const CategoryCard = ({data}) => {
 
    const navigate =  useNavigate();

    const handleClick = async (category) => {
        const exercisesURL = 'https://exercisedb.p.rapidapi.com/exercises';
        const exercisesData = await fetchData(exercisesURL);
        const categoryResult = exercisesData.filter(exercise => exercise.bodyPart.includes(category));
        navigate("/exercises", { state: categoryResult });
    }

     return (
        <div className="categories">
            {data.map((category, key) => 
                <div className="category-card" onClick={()=>handleClick(category)} key={key}>{category}</div>
            )}
        </div>
    );
};

export default CategoryCard;