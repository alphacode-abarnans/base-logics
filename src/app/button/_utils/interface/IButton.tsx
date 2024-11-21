import {ReactNode} from "react"

interface Action {
    onClick: () => void
    onHover?: () => void
    onRightClick?: () => void
}

interface Loading {
    isLoading: boolean
    skin: ReactNode
    direction: "start" | "end" | "replace"
}

export interface IButton {
    skin: ReactNode
    action: Action
    disabled: boolean
    loading?: Loading
}