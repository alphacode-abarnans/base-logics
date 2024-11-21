import React, { ComponentType } from 'react'

interface SkinProps {
    value: string
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

const MultiStateRadioBox = ({
    dataSource,
    value,
    name='checkbox',
    disabled=false,
    actions,
    Skin
} : ComponentProps) => {

    const trigger = (val : string) => {
        if(!disabled) actions?.onChange(val)
    }

    return (
        <div>
            {
                dataSource.map((val:string,i:number) => {
                    return  <span key={val}>    
                                <input 
                                    type="radio" 
                                    id={`${name}_${i+1}`} 
                                    name={name} 
                                    value={val} 
                                    defaultChecked={val == value}
                                    className='sr-only'
                                    disabled={disabled}
                                />
                                <label htmlFor={`${name}_${i+1}`}>
                                    <Skin value={val} onClick={() => trigger(val)}/>
                                </label>
                            </span>
                })
            }
        </div>
    )
}

export default MultiStateRadioBox