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