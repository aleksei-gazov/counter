// import React from 'react';
// import {Button} from '../Button';
// import {Input} from './Input';
// import {InputValueType} from '../App';
// import s from './Setting.module.css'
// // import {StateCounterType} from '../Store/reducers/Count-reducer';
// // import {ReducerType} from '../Store/Store';
// import {Dispatch} from 'redux';
//
//
// type CounterPropsType = {
//     minValue: InputValueType
//     maxValue: InputValueType
//     setMinValue: (valueMin: number) => void
//     setMaxValue: (valueMax: number) => void
//     setLocalstorage: () => void
//     countClassReset: string
//     disabledButtonReset: boolean
//     inputError: string
//     onFocus: ()=> void
//     onBlur: ()=> void
//
// }
//
//
// export const Setings: React.FC<CounterPropsType> = ({
//                                                         minValue,
//                                                         maxValue,
//                                                         setMinValue,
//                                                         setMaxValue,
//                                                         setLocalstorage,
//                                                         countClassReset,
//                                                         disabledButtonReset,
//                                                         inputError,
//                                                         onFocus,
//                                                         onBlur,
//                                                     }) => {
//
//     return (
//         <div className={s.settrings}>
//             <div className={s.input}>
//                 <div className={s.textInput}>
//                     <span className={s.text}>max value:</span>
//                     <Input
//                         inputError={inputError}
//                         type={'number'}
//                         title={maxValue}
//                         setTitle={setMaxValue}
//                         onFocus={onFocus}
//                         onBlur={onBlur}
//                     />
//                 </div>
//                 <div className={s.textInput}>
//                     <span className={s.text}>start value:</span>
//                     <Input
//                         inputError={inputError}
//                         type={'number'}
//                         title={minValue}
//                         setTitle={setMinValue}
//                         onFocus={onFocus}
//                         onBlur={onBlur}
//                     />
//                 </div>
//             </div>
//             <div className={'ButtonContainer'}>
//                 <Button name={'set'} callBack={setLocalstorage}
//                         classMain={countClassReset}
//                         disabledButton={disabledButtonReset}
//                 />
//             </div>
//         </div>
//     )
// }
//
// // type MapStatePropsType = {
// //     countPage: StateCounterType
// // }
//
// type MapDispatchToPropsType = {
//     setMinValue: (valueMin: number) => void
//     setMaxValue: (valueMax: number) => void
//     setLocalstorage: () => void
//     onFocus: ()=> void
//     onBlur: ()=> void
// }
//
// const mapStateToProps = (state: ReducerType): MapStatePropsType => {
//     return {
//         countPage: state.countPage
//     }
// }
//
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//
//
//     }
// }

import React from 'react';

const SettingsContainer = () => {
    return (
        <div>

        </div>
    );
};

export default SettingsContainer;