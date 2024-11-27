import React, { ComponentType } from "react"
import { RadioProps, SkinProps } from "./Skin.types"
import { ISize } from "./Common.types"

export interface IRadioChoice{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    name:string
    resolver:(val:any) => {value:string,label:string,key:string}
    defaultValue?:any     
    dataSource?:any[]
    actions?: {
        onChange : (val : string) => void
    }
    Renderer?: ComponentType<SkinProps>;
    size: ISize
    disabled?:boolean
}

export interface IRadioGroup{
    children: React.ReactNode
    defaultValue?:any     
    DefaultRenderer?: ComponentType<RadioProps>;
    size: ISize
    disabled?:boolean
}

export interface IRadio{
    key: string
    name: string
    value:string
    label:string
    size?: ISize
    Renderer?: ComponentType<RadioProps>
    actions?: {
        onChange : (val : string) => void
    }
    disabled?:boolean,
    defaultValue?: string
}