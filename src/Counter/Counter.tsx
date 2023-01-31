import React from 'react';
import {Scoreboard} from './Scoreboard';
import {Button} from '../Button';
import s from './Counter.module.css'
 import { useSelector,  useDispatch } from 'react-redux';
import { AppStoreType } from '../store/Stotre';
import { InitialStateType } from '../types/CountTypes';
import { useSelector } from 'react-redux';

type CounterPropsType = {
    count: number
    countPlus: () => void
    countClassAdd: string
    disabledButtonAdd: boolean
    countReset: () => void
    countClassReset: string
    disabledButtonReset: boolean
    maxValue: number
    errorMessage: boolean
    messageSet?: boolean
}

export const Counter: React.FC<CounterPropsType> = ({
                                                        count,
                                                        countPlus,
                                                        countClassAdd,
                                                        disabledButtonAdd,
                                                        countReset,
                                                        countClassReset,
                                                        disabledButtonReset,
                                                        maxValue,
                                                        errorMessage,
                                                        messageSet,
                                                    }) => {

//    const minValue = useSelector<AppStoreType, InitialStateType>((state)=> state.reducerCounter)    
    //  const steps = useSelector<AppStoreType, InitialStateType>();                                                
    //              console.log(minValue)
// let a = useSelector<AppStoreType, InitialStateType>((state: InitialStateType)=> state)
    // const dispatch = useDispatch();
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