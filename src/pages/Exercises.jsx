import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ExerciseCard from '../components/Exercises/ExerciseCard';
import fetchData from '../utils/fetchData';

const Exercises = () => {
    const location = useLocation();
    const [results, setResults] = useState([]);

    const showAll = async () => {
        const exercisesURL = 'https://exercisedb.p.rapidapi.com/exercises';
        const data = await fetchData(exercisesURL)
        setResults(data);
    };
 
    useEffect(() =>{
        if (location.state) 
            setResults(location.state);
        else
            showAll();
    },[]);

        return (
            <div className='exercises'>
                <div className="workout-heading">
                    <h2>ADD EXERCISES TO YOUR TODAY'S WORKOUT:</h2>
                </div>
                {results?.map((result, key) => (
                    <ExerciseCard key={key} exercise={result}/>
                ))}
            </div>
        );
};

export default Exercises;