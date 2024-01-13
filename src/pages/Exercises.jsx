import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ExerciseCard from '../components/Exercises/ExerciseCard';
import fetchData from '../utils/fetchData';

const Exercises = () => {
    const location = useLocation();
    const [results, setResults] = useState([]);

    const showAll = useCallback(async () => {
        const exercisesURL = 'https://exercisedb.p.rapidapi.com/exercises';
        const data = await fetchData(exercisesURL)
        setResults(data);
    }, []);
 
    useEffect(() =>{
        if (location.state) 
            setResults(location.state);
        else
            showAll();
    },[]);

    const handleLocalStorage = (exercise) => {
        if (localStorage.length == 0) {
            localStorage.setItem("exercises", JSON.stringify({[exercise.id]: exercise}))
        }
        else {
            const prevExercises = JSON.parse(localStorage.getItem("exercises"));
            const updatedExercises = {...prevExercises, 
            [exercise.id]: exercise};
            localStorage.setItem("exercises", JSON.stringify(updatedExercises));
        }
        }


        return (
            <div className='exercises'>
                <div className="workout-heading">
                    <h2>ADD EXERCISES TO YOUR TODAY'S WORKOUT:</h2>
                </div>
                {results?.map((result, key) => (
                    <ExerciseCard key={key} data={result} handleLocalStorage={handleLocalStorage}/>
                ))}
            </div>
        );
};

export default Exercises;