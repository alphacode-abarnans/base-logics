import React, { useEffect } from 'react'
import { RadioProps, SkinProps } from '@/interfaces/Skin.types'
import { ISize } from '@/interfaces/Common.types'

export const RadioUiSvg = ({ value, defaultValue, onChange,size,resolver, disabled }: SkinProps) => {
    const iconSize:{[key in ISize]:string} = {
        'sm' : 'h-5 w-4', 
        'md' : 'h-6 w-5', 
        'lg' : 'h-7 w-6', 
        'xl' : 'h-8 w-7'
    }

    const fontSize:{[key in ISize]:string} = {
        'sm' : 'text-sm', 
        'md' : 'text-base', 
        'lg' : 'text-lg', 
        'xl' : 'text-xl'
    }
    return (
        <div className={`flex items-center ${disabled ? ' text-gray-500  ' : 'text-black'}`} onClick={() => onChange(value)}>
            <svg className={`${iconSize[size]} inline-block`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                <g clipPath="url(#clip0_105_90997)">
                    <path d="M9.99999 5.66667C5.39999 5.66667 1.66666 9.4 1.66666 14C1.66666 18.6 5.39999 22.3333 9.99999 22.3333C14.6 22.3333 18.3333 18.6 18.3333 14C18.3333 9.4 14.6 5.66667 9.99999 5.66667ZM9.99999 20.6667C6.31666 20.6667 3.33332 17.6833 3.33332 14C3.33332 10.3167 6.31666 7.33333 9.99999 7.33333C13.6833 7.33333 16.6667 10.3167 16.6667 14C16.6667 17.6833 13.6833 20.6667 9.99999 20.6667Z" fill="currentColor" />
                    {
                        resolver(value).value == resolver(defaultValue).value ?
                        <path d="M10 18.1667C12.3012 18.1667 14.1667 16.3012 14.1667 14C14.1667 11.6988 12.3012 9.83333 10 9.83333C7.69882 9.83333 5.83334 11.6988 5.83334 14C5.83334 16.3012 7.69882 18.1667 10 18.1667Z" fill="currentColor" />
                        :
                        <></>
                    }
                </g>
            </svg>
            <span className={`${fontSize[size]} inline-block`}>{resolver(value).label}</span>
        </div>
    )
}

export const RadioUiHtml = ({ value, defaultValue, onChange, size, resolver, disabled }: SkinProps) => {
    const defaultSize:{[key in ISize]:string} = {
        'sm' : 'size-4 text-base leading-4',
        'md' : 'size-5 text-lg leading-4',
        'lg' : 'size-6 text-xl leading-4',
        'xl' : 'size-7 text-xxl leading-4'
    }
    return(
        <label className={`flex items-center space-x-2 cursor-pointer mb-2 ${disabled ? ' text-gray-500  ' : 'text-black'}`} onClick={() => onChange(value)}>
            {
                resolver(value).value == resolver(defaultValue).value ?
                <span className={`${defaultSize[size]} inline-block rounded-full border-2 border-black bg-white relative`}>
                    <span className="w-1/2 h-1/2 inline-block rounded-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                </span>
                :
                <span className={`${defaultSize[size]} inline-block rounded-full border-2 border-black bg-white relative`}/>
            }
            <span className={`${defaultSize[size]} text-black`}>{resolver(value).label}</span>
        </label>
    )
}

export const RadioUiSvg2 = ({ value, label, defaultValue, onChange,size, disabled }: RadioProps) => {
    const iconSize:{[key in ISize]:string} = {
        'sm' : 'h-5 w-4', 
        'md' : 'h-6 w-5', 
        'lg' : 'h-7 w-6', 
        'xl' : 'h-8 w-7'
    }

    const fontSize:{[key in ISize]:string} = {
        'sm' : 'text-sm', 
        'md' : 'text-base', 
        'lg' : 'text-lg', 
        'xl' : 'text-xl'
    }

    return (
        <div className={`flex items-center ${disabled ? ' text-gray-500  ' : 'text-black'}`} onClick={() => onChange(value)}>
            <svg className={`${iconSize[size]} inline-block`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                <g clipPath="url(#clip0_105_90997)">
                    <path d="M9.99999 5.66667C5.39999 5.66667 1.66666 9.4 1.66666 14C1.66666 18.6 5.39999 22.3333 9.99999 22.3333C14.6 22.3333 18.3333 18.6 18.3333 14C18.3333 9.4 14.6 5.66667 9.99999 5.66667ZM9.99999 20.6667C6.31666 20.6667 3.33332 17.6833 3.33332 14C3.33332 10.3167 6.31666 7.33333 9.99999 7.33333C13.6833 7.33333 16.6667 10.3167 16.6667 14C16.6667 17.6833 13.6833 20.6667 9.99999 20.6667Z" fill="currentColor" />
                    {
                        value == defaultValue ?
                        <path d="M10 18.1667C12.3012 18.1667 14.1667 16.3012 14.1667 14C14.1667 11.6988 12.3012 9.83333 10 9.83333C7.69882 9.83333 5.83334 11.6988 5.83334 14C5.83334 16.3012 7.69882 18.1667 10 18.1667Z" fill="currentColor" />
                        :
                        <></>
                    }
                </g>
            </svg>
            <span className={`${fontSize[size]} inline-block`}>{label}</span>
        </div>
    )
}