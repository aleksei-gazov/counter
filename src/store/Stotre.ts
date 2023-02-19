import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import { reducerCounter } from "./reducers/countReducer";
import {reducerSetting} from './reducers/settingReducer';
import thunk from 'redux-thunk'



const rootReducers =  combineReducers({
  reducerCounter: reducerCounter,
  reducerSetting: reducerSetting
})

export const store = legacy_createStore(
  rootReducers,
    applyMiddleware(thunk)
)

export type AppStoreType = ReturnType<typeof rootReducers>

 export type AppDispatchType = typeof store.dispatch
