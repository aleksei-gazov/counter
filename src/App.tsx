import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {Setings} from './Settings/Settings';
import { useSelector } from 'react-redux';

export type InputValueType = number

function App() {
   

    const [minValue, setMinValue] = useState<InputValueType>(0)
    const [maxValue, setMaxValue] = useState<InputValueType>(0)
    const [count, setCount] = useState<number>(minValue)
    const [focus, setfocus] = useState<boolean>(false)

    useEffect(() => {
        let valueAsStringMin = localStorage.getItem('counterValueMin')
        let valueAsStringMax = localStorage.getItem('counterValueMax')
        if (valueAsStringMin && valueAsStringMax) {
            let newValueMin = JSON.parse(valueAsStringMin)
            let newValueMax = JSON.parse(valueAsStringMax)
            setMinValue(newValueMin)
            setMaxValue(newValueMax)
            setCount(newValueMin)
        }
    }, [])

    const setLocalstorage = () => {
        if (minValue >= 0 && minValue !== maxValue) {
            localStorage.setItem('counterValueMin', JSON.stringify(minValue))
            localStorage.setItem('counterValueMax', JSON.stringify(maxValue))
            setCount(minValue)
        }
    }

    const countPlus = () => {
        if (count < maxValue && minValue >= 0 && minValue !== maxValue) {
            setCount(count + 1)
        }
    }

    const countReset = () => {
        setCount(minValue)
    }

    const onFocus = ()=> {
        setfocus(true)
}
const onBlur = ()=> {
        setfocus(false)
}


    const countClassAdd = count === maxValue || minValue >= maxValue || minValue < 0 ? 'button' + ' ' + 'disabled' : 'button'
    const countClassReset = count === minValue || minValue >= maxValue || minValue < 0 ? 'button' + ' ' + 'disabled' : 'button'
    const disabledButtonAdd = count === maxValue || minValue >= maxValue || minValue < 0
    const disabledButtonReset = count === minValue|| minValue >= maxValue || minValue < 0
    const errorMessage = minValue < 0 || minValue >= maxValue

    // SetButton disabled
    const countClassSet = minValue >= maxValue || minValue < 0 ? 'button' + ' ' + 'disabled' : 'button'
    const disabledButtonSet = minValue >= maxValue

    const inputError = minValue >= maxValue || minValue < 0 ? 'inputError' : 'inputClass'



    return (
        <div className="App">
            <Setings
                minValue={minValue}
                maxValue={maxValue}
                setLocalstorage={setLocalstorage}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                countClassReset={countClassSet}
                disabledButtonReset={disabledButtonSet}
                inputError={inputError}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Counter
                maxValue={maxValue}
                count={count}
                countPlus={countPlus}
                countClassAdd={countClassAdd}
                disabledButtonAdd={disabledButtonAdd}
                countReset={countReset}
                countClassReset={countClassReset}
                disabledButtonReset={disabledButtonReset}
                errorMessage={errorMessage}
                messageSet={focus}
            />
        </div>
    );
}

export default App;
