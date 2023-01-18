import React from "react";
import s from './Counter.module.css'

type ScoreboardPropsType = {
    count: number
    maxValue: number
}

export const Scoreboard = (props: ScoreboardPropsType) =>  {
    const countClass = props.count ===props.maxValue ? s.borderCount + ' ' + s.count  : s.count
    return (
        <div className={countClass}>{props.count}</div>
    )
}