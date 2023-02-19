import React from 'react';
import {Scoreboard} from './Scoreboard';
import {Button} from '../Button';
import s from './Counter.module.css'
import {useDispatch} from 'react-redux';
import {AppStoreType} from '../store/Stotre';
import {useSelector} from 'react-redux';
import {CounterIncreaseAC, CounterResetValueAC} from '../store/action-creator/countIncreaseAC';

type CounterPropsType = {

}

export const Counter: React.FC<CounterPropsType> = () => {

    const count = useSelector<AppStoreType, number>((state) => state.reducerCounter.count)
    const maxValue = useSelector<AppStoreType, number>((state) => state.reducerCounter.maxValue)
    const minValue = useSelector<AppStoreType, number>((state) => state.reducerCounter.minValue)
    const messageSet = useSelector<AppStoreType, boolean>((state)=> state.reducerSetting.focus )
    const maxValueInput = useSelector<AppStoreType, number>(state => state.reducerSetting.valueInputMax)
    const minValueInput = useSelector<AppStoreType, number>(state => state.reducerSetting.valueInputStart)

    const dispatch = useDispatch();
    const countPlus = () => {
        if (count < maxValue && count >= 0 && count !== maxValue) {
            dispatch(CounterIncreaseAC())
        }
    }
    const countReset = () => {
        dispatch(CounterResetValueAC())
    }
//Button Reset
    const countClassReset = count === minValue || minValue >= maxValue || minValue < 0 ? 'button' + ' ' + 'disabled' : 'button'
    const disabledButtonReset = count === minValue || minValue >= maxValue || minValue < 0

//Button Add
    const countClassAdd = count === maxValue || minValue >= maxValue || minValue < 0 ? 'button' + ' ' + 'disabled' : 'button'
    const disabledButtonAdd = count === maxValue || minValue >= maxValue || minValue < 0

    //Error Message
    const errorMessage = minValueInput < 0 || minValueInput >= maxValueInput



    return (
        <div className={s.counter}>
            {errorMessage
                ?
                <div className={s.errorMessage}>Incorrect value</div>
                :
                messageSet
                    ?
                    <div className={s.Message}>enter values and press 'SET'</div>
                    :
                    <Scoreboard count={count} maxValue={maxValue}/>
            }
            <div className={'ButtonContainer'}>
                <Button name={'add'} callBack={countPlus}
                        classMain={countClassAdd}
                        disabledButton={disabledButtonAdd}
                />
                <Button name={'reset'} callBack={countReset}
                        classMain={countClassReset}
                        disabledButton={disabledButtonReset}
                />
            </div>
        </div>
    )
}