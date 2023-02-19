import {SettingActionTypes} from '../../types/SettingType';
 import {Dispatch} from 'redux';
import {CountSetValueWidthInputAC} from './countIncreaseAC';


export const thunc = (minValue: number, maxValue: number) => ( dispatch:Dispatch ) => {
  dispatch(CountSetValueWidthInputAC(minValue, maxValue))
    localStorage.setItem('counterValueMin',  JSON.stringify(minValue))
    localStorage.setItem('counterValueMax',  JSON.stringify(maxValue))
}

export type OnFocusACType = ReturnType<typeof OnFocusAC>
export type OffFocusACType = ReturnType<typeof OffFocusAC>
export type ChangeInputStarACType = ReturnType<typeof ChangeInputStarAC>
export type ChangeInputMaxACType = ReturnType<typeof ChangeInputMaxAC>
export const OnFocusAC = ()=> {
    return {
        type: SettingActionTypes.ON_FOCUS
    } as const
}
export const OffFocusAC = ()=> {
    return {
        type: SettingActionTypes.OFF_FOCUS
    } as const
}
export const ChangeInputStarAC = (value: number) => {
    return{
        type: SettingActionTypes.INPUT_STAR_VALUE,
        payload: {
            value
        }
    } as const
}

export const ChangeInputMaxAC = (value: number) => {
    return{
        type: SettingActionTypes.INPUT_MAX_VALUE,
        payload: {
            value
        }
    } as const
}