"use client"

import {IButton} from "./interface/IButton"

const Button = (props: IButton) => {
    const {action, Skin, disabled, loading} = props

    return (
        <div
            role="button"
            tabIndex={0}
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

export default Button