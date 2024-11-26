import { ISize } from "./Common.types"

export interface SkinProps {
    value: string
    defaultValue?: string
    size : ISize
    onChange: (val:string) => void
}