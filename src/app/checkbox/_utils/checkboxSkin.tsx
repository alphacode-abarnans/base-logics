import React from 'react'

interface ICheckboxSkin {
    value:string;
}

export const toggle = ({value}:ICheckboxSkin) => {
    return (
        <div className='bg-green-200'>
            {value}
        </div>
    )
}

export const switcher = ({value}:ICheckboxSkin) => {
    return(
        <div className="flex items-center p-5" dir='rtl'>
            <div className="relative">
                <div className="w-25 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors text-sm">LTR RTL</div>
                <div className={`absolute top-0.5 ${ value == 'checked' ? 'left-0.5' : 'right-0.5'} w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition-transform`}></div>
            </div>
        </div>
    )
}

export const wallswitch = ({ value }: ICheckboxSkin) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative w-16 h-32 bg-gray-300 rounded-lg shadow-lg">
                <div className={`absolute ${value == 'checked' ? 'bottom-2' : 'top-2'} left-2 right-2 h-14 ${value == 'checked' ? 'bg-green-100' : 'bg-white'} rounded-md shadow-md transform transition-transform peer-checked:translate-y-14`}></div>
                {value == 'not_checked' &&
                    <div className="absolute top-2 left-0 right-0 text-xs text-gray-500 text-center pointer-events-none font-semibold">
                        OFF
                    </div>}
                {value == 'checked' &&
                    <div className="absolute bottom-2 left-0 right-0 text-xs text-green-600 text-center pointer-events-none font-semibold">
                        ON
                    </div>}
            </div>
        </div>
    )
}