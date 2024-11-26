import React from 'react'
import { SkinProps } from '@/interfaces/Skin.types'
// import { ISize } from '@/interfaces/Common.types'

// const defaultSize:{[key in ISize]:number} = {
//     'sm' : 1,
//     'md' : 2,
//     'lg' : 3,
//     'xl' : 4
// }

export const RadioUiSvg = ({ value, defaultValue, onChange }: SkinProps) => {
    return (
        <svg width="74" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onChange(value)}>
            <g clipPath="url(#clip0_105_90997)">
                <path d="M9.99999 5.66667C5.39999 5.66667 1.66666 9.4 1.66666 14C1.66666 18.6 5.39999 22.3333 9.99999 22.3333C14.6 22.3333 18.3333 18.6 18.3333 14C18.3333 9.4 14.6 5.66667 9.99999 5.66667ZM9.99999 20.6667C6.31666 20.6667 3.33332 17.6833 3.33332 14C3.33332 10.3167 6.31666 7.33333 9.99999 7.33333C13.6833 7.33333 16.6667 10.3167 16.6667 14C16.6667 17.6833 13.6833 20.6667 9.99999 20.6667Z" fill="black" />
                {
                    value == defaultValue ?
                    <path d="M10 18.1667C12.3012 18.1667 14.1667 16.3012 14.1667 14C14.1667 11.6988 12.3012 9.83333 10 9.83333C7.69882 9.83333 5.83334 11.6988 5.83334 14C5.83334 16.3012 7.69882 18.1667 10 18.1667Z" fill="black" />
                    :
                    <></>
                }
            </g>
            <text x="30%" y="70%" textAnchor="start" style={{  fill: "black" }} >
                {value}
            </text>
        </svg>
    )
}

export const RadioUiHtml = ({ value, defaultValue, onChange }: SkinProps) => {
    return(
        <label className="flex items-center space-x-2 cursor-pointer" onClick={() => onChange(value)}>
            {
                value == defaultValue ?
                <span className="w-4 h-4 inline-block rounded-full border-2 border-black bg-white relative">
                    <span className="w-2 h-2 inline-block rounded-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    </span>
                </span>
                :
                <span className="w-4 h-4 inline-block rounded-full border-2 border-black bg-white relative"/>
            }
            <span className="text-black">{value}</span>
        </label>
    )
}
