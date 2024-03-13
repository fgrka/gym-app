import { useState, useEffect } from "react";

const InputParams = ({name, id, setDisabled, updateParams}) => {

    const [input, setInput] = useState({
        id: id,   
        [name]: 0,
    });

    useEffect(() => {
        if (!Object.values(input).includes(0)) {
            updateParams(input);
        }
    }, [input[name]])
    
    const className = "input-"+name;
    const maxValues = {
        reps: 60,
        sets: 60,
        time: 10,
    }

    const handleInput = (e, name) => {
        let isValid;
        isValid = e.target.value > maxValues[name] ? false : true;
    
        if (isValid) {
            setInput((prev) => ({
                ...prev,
                id: id,
                [e.target.name]: parseInt(e.target.value),
                })
            );
        }
        else {
              console.log("Wprowadź wartość z zakresu"); 
        }
    }

    return(
        <input name={name} className={className} value={input[name]} type="number" placeholder="0" onChange={(e) => handleInput(e, name)} disabled={setDisabled}></input>
    )
}

export default InputParams;