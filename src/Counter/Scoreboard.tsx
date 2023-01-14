import React, {ChangeEvent, useState} from "react";

type ScoreboardPropsType = {
    count: number
    maxValue: number
}

export const Scoreboard = (props: ScoreboardPropsType) =>  {
    const countClass = props.count ===props.maxValue ? 'borderCount' + ' ' + 'count'  : 'count'
    return (
        <div className={countClass}>{props.count}</div>
    )
}