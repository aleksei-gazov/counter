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