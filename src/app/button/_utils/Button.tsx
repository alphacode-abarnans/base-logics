"use client"

import {IButton} from "./interface/IButton"

const Button = (props: IButton) => {
    const {action, skin, disabled, loading} = props

    return (
        <div
            role="button"
            tabIndex={0}
            className={`inline-block ${disabled ? "cursor-default" : ""}`}
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
            {loading?.isLoading && loading.direction === "start" && loading.skin}
            {loading?.isLoading && loading.direction === "replace" && loading.skin}
            {(loading?.isLoading && (loading.direction === "start" || loading.direction === "end") || !loading?.isLoading) && skin}
            {loading?.isLoading && loading.direction === "end" && loading.skin}
        </div>
    )
}

export default Button