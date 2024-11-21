import React from 'react'

interface ComponentProps {
    value: string;
    onClick: (val:string) => void
}

export const MultiStateButton = ({value,onClick}:ComponentProps) => {
    const theme = value == 'A' ?
                    "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300"
                    :
                    value == 'B' ?
                        "bg-green-500 hover:bg-green-600 active:bg-green-700 focus:ring-green-300"
                        :
                        "bg-red-500 hover:bg-red-600 active:bg-red-700 focus:ring-red-300"
    return (
        <button 
            className={`${theme}text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring m-2`}
            onClick={() => onClick(value)}
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
    const indeterminateStyles = {
        '--tw-ring-color': 'transparent',
        boxShadow: 'inset 0 0 0 0.25rem rgba(0, 0, 0, 0.1)',
    };
    const theme = value == 'unchecked' ?
                    "border-gray-400 rounded-sm bg-white"
                    :
                    value == 'checked' ?
                        "border-blue-600 rounded-sm bg-blue-600 checked:bg-blue-600"
                        :
                        "border-gray-400 rounded-sm bg-white"



    return (
        <div 
            className={`${theme} w-10 h-10 m-2 border-2 appearance-none cursor-pointer`} 
            style={value == 'indeterminate' ? indeterminateStyles : {}}
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