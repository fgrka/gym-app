import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext({
    workoutParams: [],
    chosenExercises: {},
    updateWorkoutParams: () => {},
    deleteWorkoutParams: () => {},
    addToLocalStorage: () => {},
    removeFromLocalStorage: () => {},
    saveWorkout: () => {},
})

export default function AppContextProvider({children}) {
    const localExercises = JSON.parse(localStorage.getItem("exercises")) || {};

    const [workoutParams, setWorkoutParams] = useState([]);
    const [chosenExercises, setChosenExercises] = useState(Object.values(localExercises));
    

    const updateWorkoutParams = (params) => {
        setWorkoutParams((prev) => {
            let updatedArr = [...prev];     
            const existItemIndex = updatedArr.findIndex((exercise) => (exercise.id === params.id));

            if (existItemIndex >= 0) {
                updatedArr[existItemIndex] = {
                ...updatedArr[existItemIndex],
                id: params.id,   
                ...params,
                };
            }
            else {
                updatedArr.push({
                    id: params.id,   
                    ...params,
                    });
            };
            return updatedArr;
        });   
    };

    const deleteWorkoutParams = (id) => {
        setWorkoutParams((prev) => {
            let prevArr = [...prev];
            let updatedArr = prevArr.filter((exercise) => exercise.id !== id);
            return updatedArr;

        });
    }

    const addToLocalStorage = (exercise) => {
        if (localStorage.length == 0) {
            localStorage.setItem("exercises", JSON.stringify({[exercise.id]: exercise}))
            setChosenExercises([exercise]);
        }
        else {
            const prevExercises = JSON.parse(localStorage.getItem("exercises"));
            const updatedExercises = {
                ...prevExercises, 
                [exercise.id]: exercise
            };
            localStorage.setItem("exercises", JSON.stringify(updatedExercises));
            setChosenExercises(Object.values(updatedExercises));
        }     
    };

    const removeFromLocalStorage = (exercise) => {
        const exercisesData = JSON.parse(localStorage.getItem("exercises"));
        delete exercisesData[exercise.id];
        Object.values(exercisesData).length == 0 ? localStorage.removeItem("exercises") : localStorage.setItem("exercises", JSON.stringify(exercisesData)) 
        setChosenExercises(Object.values(exercisesData))
     
    };

    const saveWorkout = (data) => {
        const existingSave = localStorage.getItem("saved");
        const workoutData = {
            "info": {
                title: data.get("title"),
                description: data.get("description"),
                date: data.get("date")
            },
            "exercises": chosenExercises 
        };

        if (existingSave == undefined) {
            localStorage.setItem("saved", JSON.stringify([workoutData]));
        }
        else {
            const prevSave = JSON.parse(localStorage.getItem("saved"));
            const updatedArr = [...prevSave, workoutData];
            console.log(prevSave)
            localStorage.setItem("saved", JSON.stringify(updatedArr));
        }
    }
    
    const contextValue = {
        workoutParams: workoutParams,
        chosenExercises: chosenExercises,
        updateWorkoutParams: updateWorkoutParams,
        deleteWorkoutParams: deleteWorkoutParams,
        addToLocalStorage: addToLocalStorage,
        removeFromLocalStorage: removeFromLocalStorage,
        saveWorkout: saveWorkout,
    }

    return(
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}