import React from 'react'

interface ICheckboxSkin {
    value:string;
    disabled:boolean
}

export const toggle = ({value,disabled}:ICheckboxSkin) => {
    return (
        <div className={`${disabled?'bg-green-200':'bg-green-500'}`}>
            {value}
        </div>
    )
}

export const switcher = ({value,disabled}:ICheckboxSkin) => {
    return(
        <div className="flex items-center">
            <div className="relative">
                <div className={`w-12 h-6 rounded-full peer-checked:bg-green-500 transition-colors ${disabled?'bg-gray-200':'bg-gray-300'}`}></div>
                <div className={`absolute top-0.5 ${ value == 'checked' ? 'left-0.5' : 'right-0.5'} w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition-transform`}></div>
            </div>
        </div>
    )
}

export const wallswitch = ({ value,disabled }: ICheckboxSkin) => {
    return (
        <div className="relative w-16 h-32 bg-gray-300 rounded-lg shadow-lg">
            <div
                className={`absolute ${value == 'checked' ? 'bottom-2' : 'top-2'} left-2 right-2 h-14 ${value == 'checked' ? disabled?'bg-green-100':'bg-green-200' : disabled?'bg-gray-200':'bg-white'} rounded-md shadow-md transform transition-transform peer-checked:translate-y-14`}></div>
            {value == 'not_checked' &&
                <div
                    className="absolute top-2 left-0 right-0 text-xs text-gray-500 text-center pointer-events-none font-semibold">
                    OFF
                </div>}
            {value == 'checked' &&
                <div
                    className="absolute bottom-2 left-0 right-0 text-xs text-green-600 text-center pointer-events-none font-semibold">
                    ON
                </div>}
        </div>
    )
}