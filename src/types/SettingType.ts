
export enum SettingActionTypes {
    ON_FOCUS = 'ON_FOCUS',
    OFF_FOCUS = 'OFF_FOCUS'
}

export type InitialStateSettingType = {
    focus: boolean
}

type OnFocusType = {
    type: SettingActionTypes.ON_FOCUS
}
type OffFocusType = {
    type: SettingActionTypes.OFF_FOCUS
}

export type SettingActionType = OnFocusType | OffFocusType