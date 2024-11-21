import React, { ComponentType } from 'react'

interface SkinProps {
    value: string;
    onClick: (val:string) => void
}

interface ComponentProps{
    dataSource:string[]
    value:string
    name:string
    actions?: {
        onChange : (val : string) => void
    }
    Skin: ComponentType<SkinProps>;
    disabled?:boolean
}

const MultiStateCheckBox = ({
    dataSource,
    value,
    name='checkbox',
    disabled=false,
    actions,
    Skin
} : ComponentProps) => {

    const trigger = () => {
        if(!disabled) {
            const i = dataSource.findIndex(x => x == value)
            if(i >= 0 && i < (dataSource.length - 1)) actions?.onChange(dataSource[i + 1])
            else actions?.onChange(dataSource[0])
        }
    }

    return (
        <div>
            <input 
                type="checkbox" 
                id={`${name}`} 
                name={name} 
                className='sr-only'
                disabled={disabled}
            />
            <label htmlFor={`${name}`}>
                <Skin value={value} onClick={() => trigger()}/>
            </label>
        </div>
    )
}

export default MultiStateCheckBox