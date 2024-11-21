"use client"
import React, { useState } from 'react'
import MultiStateRadioBox from './_utils/MultiStateRadioBox'
import { CustomSkin, MultiStateButton, TriStateSkin, wallSwitch } from './_utils/Skins';
import MultiStateCheckBox from './_utils/MultiStateCheckBox';




const Page = () => {
    const [currentValue, setCurrentValue] = useState('A');
    const [currentValue2, setCurrentValue2] = useState('Good');
    const [currentValue3, setCurrentValue3] = useState('checked');
    const [currentValue4, setCurrentValue4] = useState('checked');

    const onChange = (val:string) => {
        setCurrentValue(val);
    }

    const onChange2 = (val:string) => {
        setCurrentValue2(val);
    }

    const onChange3 = (val:string) => {
        setCurrentValue3(val);
    }

    const onChange4 = (val:string) => {
        setCurrentValue4(val);
    }

    return (
        <div>
            <div className='mb-2'>
                <MultiStateRadioBox 
                    dataSource={['A', 'B', 'C']} 
                    value={currentValue} 
                    name={'test'} 
                    actions={{
                        onChange:onChange
                    }}
                    Skin={MultiStateButton}
                />
                <div>{currentValue}</div>
            </div>
            <hr/>
            <div className='mt-2'>
                <MultiStateRadioBox 
                    dataSource={['Good', 'Bad', 'Avg','Worst']} 
                    value={currentValue2} 
                    name={'test2'} 
                    actions={{
                        onChange:onChange2
                    }}
                    Skin={CustomSkin}
                />
                <div>{currentValue2}</div>
            </div>
            <hr/>
            <div className='mt-2'>
                <MultiStateCheckBox 
                    dataSource={['checked', 'unchecked', 'indeterminate']} 
                    value={currentValue3} 
                    name={'test3'} 
                    actions={{
                        onChange:onChange3
                    }}
                    Skin={TriStateSkin}
                />
            </div>
            <hr/>
            <div className='mt-2'>
                <MultiStateCheckBox 
                    dataSource={['checked', 'unchecked']} 
                    value={currentValue4} 
                    name={'test4'} 
                    actions={{
                        onChange:onChange4
                    }}
                    Skin={wallSwitch}
                />
            </div>
        </div>
    )
}

export default Page