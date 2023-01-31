import { legacy_createStore, combineReducers } from "redux";
import { reducerCounter } from "./reducers/countReducer";
import {reducerSetting} from './reducers/settingReducer';



const reducers =  combineReducers({
  reducerCounter: reducerCounter,
  reducerSetting: reducerSetting
})

export const store = legacy_createStore(
  reducers
)

export type AppStoreType = ReturnType<typeof reducers>


