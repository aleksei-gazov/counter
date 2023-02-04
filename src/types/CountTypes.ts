export enum CountActionTypes {
    COUNT_INCREASE = 'COUNT_INCREASE',
    MAX_VALUE_COUNTER = 'MAX_VALUE_COUNTER',
    COUNT_RESET_VALUE = 'COUNT_RESET_VALUE',
    COUNT_SET_VALUES_WIDTH_INPUTS = 'COUNT_SET_VALUES_WIDTH_INPUTS'
}

export type InitialStateType = {
    count: number
    minValue: number
    maxValue: number
}

type CounterIncreaseACType = {
    type: CountActionTypes.COUNT_INCREASE
}

type CounterResetValueACType = {
    type: CountActionTypes.COUNT_RESET_VALUE
}

type CountSetValueWidthInputType = {
    type: CountActionTypes.COUNT_SET_VALUES_WIDTH_INPUTS
    payload: {
        minValue: number
        maxValue: number
    }
}

export type CounterActionType = CounterIncreaseACType
    | CountSetValueWidthInputType
    | CounterResetValueACType
    | CountSetValueWidthInputType