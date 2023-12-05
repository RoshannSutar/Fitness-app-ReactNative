import React, { createContext, useState } from "react";

const FitnessItems = createContext();
const FitnessContext = ({ children }) => {
const [completed, setCompleted] = useState([]);
const [workout, setWorkout] = useState(0);
const [calories, setCalories] = useState(0);
const [minutes, SetMinutes] = useState(0);
return (
<FitnessItems.Provider
    value={{
    completed,
    setCompleted,
    workout,
    setWorkout,
    calories,
    setCalories,
    minutes,
    SetMinutes,
    }}
>
    {children}
</FitnessItems.Provider>
);
};
export {FitnessContext,FitnessItems}