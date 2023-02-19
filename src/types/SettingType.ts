import {
    ChangeInputMaxACType,
    ChangeInputStarACType,
    OffFocusACType,
    OnFocusACType,

} from '../store/action-creator/settingFocusAC';

export enum SettingActionTypes {
    ON_FOCUS = 'ON_FOCUS',
    OFF_FOCUS = 'OFF_FOCUS',
    INPUT_STAR_VALUE = 'INPUT_STAR_VALUE',
    INPUT_MAX_VALUE = 'INPUT_MAX_VALUE'
}

export type InitialStateSettingType = {
    focus: boolean
    valueInputStart: number
    valueInputMax: number
}

type OnFocusType = {
    type: SettingActionTypes.ON_FOCUS
}
type OffFocusType = {
    type: SettingActionTypes.OFF_FOCUS
}
type ChangeInputStarType = {
    type: SettingActionTypes.INPUT_STAR_VALUE
    payload: {
        value: number
    }
}
type ChangeInputMaxType = {
    type: SettingActionTypes.INPUT_MAX_VALUE
    payload: {
        value: number
    }
}

export type SettingActionType = OnFocusACType
    | OffFocusACType
    | ChangeInputStarACType
    | ChangeInputMaxACType