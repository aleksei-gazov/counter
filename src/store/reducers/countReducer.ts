import { CountActionTypes, CounterActionType, InitialStateType } from "../../types/CountTypes"


const initialState: InitialStateType = {
  minValue: 0,
  maxValue: 0
}

export const reducerCounter = (state: InitialStateType = initialState, action: CounterActionType): InitialStateType => {
  switch(action.type) {
    case CountActionTypes.COUNT_INCREASE: 
return {...state, minValue: state.minValue + 1}
    case CountActionTypes.MAX_VALUE_COUNTER: 
return {...state, maxValue: action.value}
    default: 
    return state
  }
}