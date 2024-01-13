import { useEffect, useState } from "react";
import fetchData from "../../utils/fetchData";
import CategoryCard from "./CategoryCard";


const Categories = () => {
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
            <CategoryCard data={data}/>
        </div>
    );
};

export default Categories;