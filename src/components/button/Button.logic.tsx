"use client"

import {ComponentType, ReactNode} from "react"

interface Action {
    onClick: () => void
    onHover?: () => void
    onRightClick?: () => void
}

export interface Loading {
    isLoading: boolean
    skin: ReactNode
    direction: "start" | "end" | "replace"
}

export interface SkinProps {
    disabled: boolean
    loading?: Loading
    width?: number
    height?: number
}

export interface IButton {
    id: string,
    Skin: ComponentType<SkinProps>,
    action: Action,
    disabled: boolean,
    loading?: Loading,
    changedClassNames?: string,
    width?: number
    height?: number
}

export const Button = (props: IButton) => {
    const {action, id, Skin, disabled, loading} = props

    return (
        <div
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
            <Skin disabled={disabled} loading={loading}/>
        </div>
    )
}
