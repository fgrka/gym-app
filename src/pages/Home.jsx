import SearchBar from "../components/UI/SearchBar"
import Categories from '../components/Home/Categories';
import Hero from '../components/Home/Hero';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [results, setResults] = useState("");
    const navigate = useNavigate();

    
    const handleSearch = (result) => {
        setResults(result);
    }
    
    useEffect(() => {
        if (results) {
        navigate("/exercises", { state: results })}
    }, [results])


    return (
    <div>
        <Hero></Hero>
        <SearchBar searchResult = {handleSearch}></SearchBar>
        <Categories results = {results}></Categories>
    </div>
    )
}

export default Home;