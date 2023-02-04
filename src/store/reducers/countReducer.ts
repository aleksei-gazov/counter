import {CountActionTypes, CounterActionType, InitialStateType} from '../../types/CountTypes'


const initialState: InitialStateType = {
    count: 0,
    minValue: 0,
    maxValue: 2
}

export const reducerCounter = (state: InitialStateType = initialState, action: CounterActionType): InitialStateType => {
    switch (action.type) {
        case CountActionTypes.COUNT_INCREASE:
            return {...state, count: state.count + 1}
        case CountActionTypes.COUNT_SET_VALUES_WIDTH_INPUTS:
            return {...state, count: action.payload.minValue, maxValue: action.payload.maxValue, minValue: action.payload.minValue}
        case CountActionTypes.COUNT_RESET_VALUE:
            return {...state, count: state.minValue}
        default:
            return state
    }
}