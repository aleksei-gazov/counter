import { CountActionTypes } from "../../types/CountTypes"

export const CounterIncreaseAC = ()=> {
  return {
    type: CountActionTypes.COUNT_INCREASE
  }
}
export const CountSetValueWidthInputAC = (minValue: number,  maxValue: number)=> {
  return {
    type: CountActionTypes.COUNT_SET_VALUES_WIDTH_INPUTS,
    payload: {
      minValue,
      maxValue
    }
  }
}

export const CounterResetValueAC = () => {
  return {
    type: CountActionTypes.COUNT_RESET_VALUE
  }
}