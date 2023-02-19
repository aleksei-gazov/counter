import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {Setings} from './Settings/Settings';


export type InputValueType = number

function App() {


    // const [minValue, setMinValue] = useState<InputValueType>(0)
    // const [maxValue, setMaxValue] = useState<InputValueType>(0)
    // const [count, setCount] = useState<number>(minValue)
    //
    // useEffect(() => {
    //     let valueAsStringMin = localStorage.getItem('counterValueMin')
    //     let valueAsStringMax = localStorage.getItem('counterValueMax')
    //     if (valueAsStringMin && valueAsStringMax) {
    //         let newValueMin = JSON.parse(valueAsStringMin)
    //         let newValueMax = JSON.parse(valueAsStringMax)
    //         setMinValue(newValueMin)
    //         setMaxValue(newValueMax)
    //         setCount(newValueMin)
    //     }
    // }, [])
    //
    // const setLocalstorage = () => {
    //     if (minValue >= 0 && minValue !== maxValue) {
    //         localStorage.setItem('counterValueMin', JSON.stringify(minValue))
    //         localStorage.setItem('counterValueMax', JSON.stringify(maxValue))
    //         setCount(minValue)
    //     }
    // }

    return (
        <div className="App">
            <Setings
                // setLocalstorage={setLocalstorage}
            />
            <Counter />
        </div>
    );
}

export default App;
