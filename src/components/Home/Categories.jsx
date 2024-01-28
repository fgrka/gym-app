import { useNavigate } from "react-router-dom";
import fetchData from "../../utils/fetchData";

import CategoryCard from "./CategoryCard";

const Categories = () => {

    const navigate =  useNavigate();
    const handleCategoryClick = async (category) => {
        const exercisesURL = 'https://exercisedb.p.rapidapi.com/exercises';
        const exercisesData = await fetchData(exercisesURL);
        const categoryResult = exercisesData.filter(exercise => exercise.bodyPart.includes(category));
        navigate("/exercises", { state: categoryResult });
    }

    // const [ categoryData, setCategoryData ] = useState([])

    // useEffect(() =>  
    const data = [
        "back",
        "cardio",
        "chest",
        "lower arms",
        "lower legs",
        "neck",
        "shoulders",
        "upper arms",
        "upper legs",
        "waist"
    ];
    //     const partsURL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
    //     const handleData = async () => {
    //         const category = await fetchData(partsURL);
    //         setCategoryData(category);
    //     }
    //     handleData();
    // },[]);

    return (
        <div>
            <CategoryCard data={data} onCategoryClick ={handleCategoryClick}/>
        </div>
    );
};

export default Categories;