import { ISize } from "./Common.types"

export interface SkinProps {
    value: any
    defaultValue?: any
    size : ISize
    disabled: boolean
    onChange: (val:string) => void
    resolver: (val:any) => {value:string,label:string}
}


export interface RadioProps {
    value: string
    label: string
    onChange: (val:string) => void
    size : ISize
    defaultValue?: string
    disabled? : boolean
}
