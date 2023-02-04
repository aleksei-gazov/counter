import {SettingActionTypes} from '../../types/SettingType';


export const OnFocusAC = ()=> {
    return {
        type: SettingActionTypes.ON_FOCUS
    }
}
export const OffFocusAC = ()=> {
    return {
        type: SettingActionTypes.OFF_FOCUS
    }
}
export const ChangeInputStarAC = (value: number) => {
    return{
        type: SettingActionTypes.INPUT_STAR_VALUE,
        payload: {
            value
        }
    }
}

export const ChangeInputMaxAC = (value: number) => {
    return{
        type: SettingActionTypes.INPUT_MAX_VALUE,
        payload: {
            value
        }
    }
}