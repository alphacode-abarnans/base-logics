import React from 'react'
import { IRadio } from '@/interfaces/Radio.types'

const RadioLogic = ({
    dataSource,
    defaultValue,
    name='checkbox',
    disabled=false,
    actions,
    Skin
} : IRadio) => {

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
                                    defaultChecked={val == defaultValue}
                                    className='sr-only'
                                    disabled={disabled}
                                />
                                <label htmlFor={`${name}_${i+1}`}>
                                    <Skin value={val} defaultValue={defaultValue} onChange={() => trigger(val)} size={'sm'}/>
                                </label>
                            </span>
                })
            }
        </div>
    )
}

export default RadioLogic