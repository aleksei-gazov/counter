import { legacy_createStore, combineReducers } from "redux";
import { reducerCounter } from "./reducers/countReducer";



const reducers =  combineReducers({
  reducerCounter: reducerCounter
})

export const store = legacy_createStore(
  reducers
)

export type AppStoreType = ReturnType<typeof reducers>


