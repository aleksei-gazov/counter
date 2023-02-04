import React, {ChangeEvent, useState} from "react";

type InputPropsType = {
    title: string | number
    setTitle: (title: number)=> void
    type: string
    inputError: string
    onFocus: ()=> void
    onBlur: ()=> void
}

export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(Number(event.currentTarget.value))
    }
    // const onFocusInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     console.log(event)
    // }

    return (
        <input
            className={props.inputError}
            type={props.type}
            value={props.title}
            onChange={onChangeInputHandler}
            onFocus={()=> {props.onFocus()}}
            onBlur={()=> {props.onBlur()}}
        />
    )
}