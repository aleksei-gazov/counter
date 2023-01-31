import { CountActionTypes } from "../../types/CountTypes"

export const CounterIncreaseAC = ()=> {
  return {
    type: CountActionTypes.COUNT_INCREASE
  }
}
export const CounterMaxValueAC = (value: number)=> {
  return {
    type: CountActionTypes.MAX_VALUE_COUNTER,
    value
  }
}