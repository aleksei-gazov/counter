import {CountActionTypes, CounterActionType, InitialStateType} from '../../types/CountTypes'


const initialState: InitialStateType = {
    value: 0,
    maxValue: 1
}

export const reducerCounter = (state: InitialStateType = initialState, action: CounterActionType): InitialStateType => {
    switch (action.type) {
        case CountActionTypes.COUNT_INCREASE:
            return {...state, value: state.value + 1}
        case CountActionTypes.MAX_VALUE_COUNTER:
            return {...state, value: action.value}
        default:
            return state
    }
}