import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext({
    workoutParams: [],
    handleWorkoutParams: () => {}
})

export default function AppContextProvider({children}) {

    const [workoutParams, setWorkoutParams] = useState([]);


    const handleWorkoutParams = (params) => {


        setWorkoutParams((prev) => {
            let updatedArr= [...prev];
            console.log(prev);
            console.log(updatedArr);
               
            const existItemIndex = updatedArr.findIndex((exercise) => (exercise.id === params.id));
            const existingItem = updatedArr[existItemIndex];

            if (existingItem) {
                    updatedArr[existItemIndex] = {
                    id: params.id,   
                    timeForSet : params.timeForSet,
                    sets :  params.sets,
                    reps :  params.reps,
                    totalTime :  params.totalTime,};
            }

            else {
                updatedArr.push({
                    id: params.id,   
                    timeForSet : params.timeForSet,
                    sets :  params.sets,
                    reps :  params.reps,
                    totalTime :  params.totalTime});
            };
            return updatedArr;
        });    
    };



    const contextValue = {
        workoutParams: workoutParams,
        handleWorkoutParams: handleWorkoutParams,
    }


    return(
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}