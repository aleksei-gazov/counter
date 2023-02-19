import React, {useEffect} from 'react';
import {Button} from '../Button';
import {Input} from './Input';
import {InputValueType} from '../App';
import s from './Setting.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {
    ChangeInputMaxAC,
    ChangeInputStarAC,
    OffFocusAC,
    OnFocusAC,
    thunc
} from '../store/action-creator/settingFocusAC';
import {  AppStoreType} from '../store/Stotre';
import {CountSetValueWidthInputAC} from '../store/action-creator/countIncreaseAC';


type CounterPropsType = {

}
// export const AppDispatch = ()=> useDispatch<AppDispatchType>()

export const Setings: React.FC<CounterPropsType> = () => {





    const maxValue = useSelector<AppStoreType, number>(state => state.reducerSetting.valueInputMax)
    const minValue = useSelector<AppStoreType, number>(state => state.reducerSetting.valueInputStart)
    const dispatch = useDispatch<any>()

    useEffect(()=> {
        let valueAsStringMin = localStorage.getItem('counterValueMin')
        let valueAsStringMax = localStorage.getItem('counterValueMax')
        if (valueAsStringMin && valueAsStringMax) {
            let newValueMin = JSON.parse(valueAsStringMin)
            let newValueMax = JSON.parse(valueAsStringMax)
            dispatch(CountSetValueWidthInputAC(newValueMin, newValueMax))
            dispatch(ChangeInputStarAC(newValueMin))
            dispatch(ChangeInputMaxAC( newValueMax))
        }
    }, [])

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


        dispatch(thunc(minValue, maxValue))
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