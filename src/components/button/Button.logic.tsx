"use client"

import {ComponentType, ReactNode} from "react"
import {ISize} from "@/interfaces/Common.types"

export type IDirection = "start" | "end" | "replace"

interface Action {
    onClick: () => void
    onHover?: () => void
    onRightClick?: () => void
}

export interface LoadingSkinProps {
    content: ReactNode
    disabled: boolean
    size: ISize
}

export interface Loading {
    isLoading: boolean
    direction: IDirection
    size: ISize
}

export interface SkinProps {
    content: ReactNode
    disabled: boolean
    size: ISize
}

export interface IButton {
    id: string
    Skin: ComponentType<SkinProps>
    content: ReactNode
    action: Action
    disabled: boolean
    size: ISize
    loading?: Loading
    LoadingSkin?: ComponentType<LoadingSkinProps>
    loadingContent?: ReactNode
}

export const Button = (props: IButton) => {
    const {action, id, Skin, content, disabled, size, loading, LoadingSkin, loadingContent} = props

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
            {(!loading || !loading.isLoading || (loading && !LoadingSkin)) && (
                <Skin content={<>
                    {loading && loading.isLoading && <>
                        {loading.direction === "start" && loadingContent}
                        {loading.direction === "replace" ? loadingContent : content}
                        {loading.direction === "end" && loadingContent}
                    </>}
                    {(!loading || !loading.isLoading)&& content}
                </>} disabled={disabled} size={size}/>
            )}

            {loading && LoadingSkin && loading.isLoading && (
                <LoadingSkin
                    content={<>
                        {loading.direction === "start" && loadingContent}
                        {loading.direction === "replace" ? loadingContent : content}
                        {loading.direction === "end" && loadingContent}
                    </>}
                    disabled={disabled}
                    size={loading.size}
                />
            )}
        </div>
    )
}
