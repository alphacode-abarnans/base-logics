import React from 'react'
import { IRadio, IRadioChoice, IRadioGroup } from '@/interfaces/Radio.types'

export const RadioChoice = ({
    dataSource,
    defaultValue,
    actions,
    size,
    Renderer,
    resolver,
    name='radioGroup',
    disabled=false,
} : IRadioChoice) => {

    const trigger = (val : string) => {
        if(!disabled) actions?.onChange(val)
    }

    return (
        <div>
            {
                dataSource?.map((val:any,i:number) => {
                    return  <span key={resolver(val).key}>    
                                <input 
                                    type="radio" 
                                    id={`${name}_${i+1}`} 
                                    name={name} 
                                    value={resolver(val).value} 
                                    defaultChecked={resolver(val).value == resolver(defaultValue).value}
                                    className='sr-only'
                                    disabled={disabled}
                                />
                                <label htmlFor={`${name}_${i+1}`}>
                                    {
                                        Renderer && 
                                        <Renderer 
                                            value={val} 
                                            defaultValue={defaultValue} 
                                            onChange={() => trigger(val)} 
                                            size={size}
                                            resolver={resolver}
                                            disabled={disabled}
                                        />
                                    }
                                </label>
                            </span>
                })
            }
        </div>
    )
}


export const RadioGroup = ({children,size,DefaultRenderer} : IRadioGroup) => {

    return (
        <div>
            {React.Children.map(children as React.ReactElement[], (child:React.ReactElement) =>
                React.cloneElement(child, { size : size , Renderer : child.props.Renderer ?? DefaultRenderer })
            )}
        </div>
    )
}

export const Radio = ({
    name,
    key,
    value,
    label,
    size,
    defaultValue,
    disabled,
    Renderer,
    actions
} : IRadio) => {

    const trigger = (val : string) => {
        if(!disabled) actions?.onChange(val)
    }

    return (
            <span>    
                <input 
                    type="radio" 
                    id={`${name}_${key}`} 
                    name={name} 
                    value={value} 
                    defaultChecked={value == defaultValue}
                    className='sr-only'
                    disabled={disabled}
                />
                <label htmlFor={`${name}_${key}`}>
                    {
                        Renderer && 
                        <Renderer 
                            value={value}
                            defaultValue={defaultValue}
                            onChange={() => trigger(value)} 
                            label={label}    
                            size={size ?? 'sm'}                    
                        />
                    }
                </label>
            </span>
    )
}