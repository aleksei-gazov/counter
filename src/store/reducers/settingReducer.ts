import {InitialStateSettingType, SettingActionType, SettingActionTypes} from '../../types/SettingType'


const initialState: InitialStateSettingType = {
    focus: false
}

export const reducerSetting = (state: InitialStateSettingType = initialState, action: SettingActionType): InitialStateSettingType => {
    switch (action.type) {
        case SettingActionTypes.ON_FOCUS: {
            return {...state, focus: true}
        }
        case SettingActionTypes.OFF_FOCUS: {
            return {...state, focus: false}
        }

        default:
            return state
    }
}