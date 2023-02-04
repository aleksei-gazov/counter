import {InitialStateSettingType, SettingActionType, SettingActionTypes} from '../../types/SettingType'


const initialState: InitialStateSettingType = {
    focus: false,
    valueInputStart: 0,
    valueInputMax: 0,
}

export const reducerSetting = (state: InitialStateSettingType = initialState, action: SettingActionType): InitialStateSettingType => {
    switch (action.type) {
        case SettingActionTypes.ON_FOCUS: {
            return {...state, focus: true}
        }
        case SettingActionTypes.OFF_FOCUS: {
            return {...state, focus: false}
        }
        case SettingActionTypes.INPUT_STAR_VALUE: {
            return {...state, valueInputStart: action.payload.value}
        }
        case SettingActionTypes.INPUT_MAX_VALUE: {
            return {...state, valueInputMax: action.payload.value}
        }

        default:
            return state
    }
}