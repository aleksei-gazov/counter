import React from 'react';
import {Scoreboard} from './Scoreboard';
import {Button} from '../Button';
import s from './Counter.module.css'

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