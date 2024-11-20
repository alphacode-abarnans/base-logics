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
}

export interface IButton {
    Skin: ComponentType<SkinProps>
    action: Action
    disabled: boolean
    loading?: Loading
}