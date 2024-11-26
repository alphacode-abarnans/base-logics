import { ComponentType } from "react"
import { SkinProps } from "./Skin.types"

export interface IRadio{
    dataSource:string[]
    defaultValue:string
    name:string
    actions?: {
        onChange : (val : string) => void
    }
    Skin: ComponentType<SkinProps>;
    disabled?:boolean
}