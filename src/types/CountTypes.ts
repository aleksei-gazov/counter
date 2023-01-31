

export enum CountActionTypes {
COUNT_INCREASE = 'COUNT_INCREASE',
MAX_VALUE_COUNTER = 'MAX_VALUE_COUNTER'
}

export type InitialStateType = {
 value: number
  maxValue: number
}

type CounterIncreaseACType = {
  type: CountActionTypes.COUNT_INCREASE
}

type CounterMaxValueACType = {
  type: CountActionTypes.MAX_VALUE_COUNTER,
  value: number
}

export type CounterActionType = CounterIncreaseACType | CounterMaxValueACType