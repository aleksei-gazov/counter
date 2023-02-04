import React from 'react';
import {Button} from '../Button';
import {Input} from './Input';
import {InputValueType} from '../App';
import s from './Setting.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {ChangeInputMaxAC, ChangeInputStarAC, OffFocusAC, OnFocusAC} from '../store/action-creator/settingFocusAC';
import {AppStoreType} from '../store/Stotre';
import {CountSetValueWidthInputAC} from '../store/action-creator/countIncreaseAC';


type CounterPropsType = {
    // minValue: InputValueType
    // maxValue: InputValueType
    // setMinValue: (valueMin: number) => void
    // setMaxValue: (valueMax: number) => void
    // setLocalstorage: () => void
    // countClassReset: string
    // disabledButtonReset: boolean
    // inputError: string


}

export const Setings: React.FC<CounterPropsType> = ({
                                                        // minValue,
                                                        // maxValue,
                                                        // setMinValue,
                                                        // setMaxValue,
                                                        // setLocalstorage,
                                                        // countClassReset,
                                                        // disabledButtonReset,
                                                        // inputError,

                                                    }) => {

    const dispatch = useDispatch();
    const maxValue = useSelector<AppStoreType, number>(state => state.reducerSetting.valueInputMax)
    const minValue = useSelector<AppStoreType, number>(state => state.reducerSetting.valueInputStart)


    const onFocus = () => {
        dispatch(OnFocusAC())
    }
    const onBlur = () => {
        dispatch(OffFocusAC())
    }
    const setMaxValue = (valueMax: number) => {
        dispatch(ChangeInputMaxAC(valueMax))
    }
    const  setMinValue = (valueMax: number) => {
        dispatch(ChangeInputStarAC(valueMax))
    }

    const setLocalstorage = () => {
        dispatch(CountSetValueWidthInputAC(minValue, maxValue))
    }

    const inputError = minValue >= maxValue || minValue < 0 ? 'inputError' : 'inputClass'

    // SetButton disabled
    const countClassSet = minValue >= maxValue || minValue < 0 ? 'button' + ' ' + 'disabled' : 'button'
    const disabledButtonSet = minValue >= maxValue


    return (
        <div className={s.settrings}>
            <div className={s.input}>
                <div className={s.textInput}>
                    <span className={s.text}>max value:</span>
                    <Input
                        inputError={inputError}
                        type={'number'}
                        title={maxValue}
                        setTitle={setMaxValue}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </div>
                <div className={s.textInput}>
                    <span className={s.text}>start value:</span>
                    <Input
                        inputError={inputError}
                        type={'number'}
                        title={minValue}
                        setTitle={setMinValue}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </div>
            </div>
            <div className={'ButtonContainer'}>
                <Button name={'set'} callBack={setLocalstorage}
                        classMain={countClassSet}
                        disabledButton={disabledButtonSet}
                />
            </div>
        </div>
    )
}