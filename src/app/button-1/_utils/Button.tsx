"use client"

import {IButton} from "./interface/IButton"

export const Button = (props: IButton & React.HTMLAttributes<HTMLElement>) => {
    const {action, id, Skin, disabled, loading,width,height, ...restProps} = props

    return (
        <div
            {...restProps}
            id={id}
            className='cursor-default'
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
            {restProps["aria-describedby"] && (
                <span id={`${id}`} className="sr-only">
                    {restProps["aria-describedby"]}
                </span>
            )}
            <Skin disabled={disabled} loading={loading} width={width} height={height}/>
        </div>
    )
}
