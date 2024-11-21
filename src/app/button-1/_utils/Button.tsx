"use client"

import {IButton} from "./interface/IButton"

export const Button = (props: IButton) => {
    const {action, Skin, disabled, loading, ...restProps} = props

    return (
        <div
            {...restProps}
            className='inline-block cursor-default'
            onClick={() => {
                if (!disabled) action.onClick()
            }}
            onMouseEnter={() => {
                if (!disabled && action.onHover) action.onHover()
            }}
            onContextMenu={() => {
                if (!disabled && action.onRightClick) action.onRightClick()
            }}
        >
            <Skin disabled={disabled} loading={loading}/>
        </div>
    )
}
