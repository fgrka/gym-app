import loupe from "../../assets/loupe.svg" 
import { useRef } from "react";
import fetchData from "../../utils/fetchData";

const SearchBar = (props) => {
    // const [searchText, setSearchText] = useState("");
    const searchBar = useRef("");

    const handleSearch = async() => {
        const searchText = searchBar.current.value;
 
        if (searchText) {
            const exercisesURL = 'https://exercisedb.p.rapidapi.com/exercises';
            const exercisesData = await fetchData(exercisesURL);   
            const result = exercisesData.filter(exercise => exercise.name.includes(searchText) || exercise.bodyPart.includes(searchText) || exercise.target.includes(searchText) || exercise.secondaryMuscles.includes(searchText));
            props.searchResult(result);
        }
    }
 
    return (
        <div className="search">
            <input ref={searchBar} type="text" placeholder="Szukaj ćwiczeń"/>
            <img src={loupe} onClick={handleSearch} alt="loupe" />
        </div>
    );
};

export default SearchBar;

// onChange={(e)=>setSearchText(e.target.value)} value={searchText}