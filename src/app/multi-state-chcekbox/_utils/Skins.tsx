import React from 'react'
import { useConfig } from '@/context/ThemeContext';

interface ComponentProps {
    value: string;
    onClick: (val:string) => void
}

export const MultiStateButton = ({value,onClick}:ComponentProps) => {
    const config = useConfig();

    const theme = value == 'A' ?
                    config.theme.input.button.primary
                    :
                    value == 'B' ? config.theme.input.button.secondary : config.theme.input.button.danger
    return (
        <button 
            className={`${theme}`}
            onClick={() => onClick(value)}
            id='item1'
        >
            {value}
        </button>
    )
}


export const CustomSkin = ({value,onClick}:ComponentProps) => (
    <div 
        style={{ border: '2px solid green', padding: '5px',marginTop:"20px",width:'350px',margin:'0px 0px 0px 10px' }}
        onClick={() => onClick(value)}
    >
        <h3>Custom Skin Component</h3>
        <p>Value: {value}</p>
    </div>
);


export const TriStateSkin = ({value,onClick}:ComponentProps) => {
    const config = useConfig();
    const theme = value == 'unchecked' ?
                    config.theme.input.checkBox.unchecked
                    :
                    value == 'checked' ? config.theme.input.checkBox.checked : config.theme.input.checkBox.indeterminate

    return (
        <div 
            className={`${theme}`} 
            onClick={() => onClick(value)}
        >
        </div>
    )
};

export const wallSwitch = ({value,onClick}: ComponentProps) => {
    return (
        <div className="relative w-16 h-32 bg-gray-300 rounded-lg shadow-lg" onClick={() => onClick(value)}>
            <div className={`absolute ${value == 'checked' ? 'bottom-2' : 'top-2'} left-2 right-2 h-14 ${value == 'checked' ? 'bg-green-100' : 'bg-white'} rounded-md shadow-md transform transition-transform peer-checked:translate-y-14`}></div>
            {value == 'unchecked' &&
                <div className="absolute top-2 left-0 right-0 text-xs text-gray-500 text-center pointer-events-none font-semibold">
                    OFF
                </div>}
            {value == 'checked' &&
                <div className="absolute bottom-2 left-0 right-0 text-xs text-green-600 text-center pointer-events-none font-semibold">
                    ON
                </div>}
        </div>
    )
}