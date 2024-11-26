"use client"
import React, { useEffect, useState } from 'react'
import MultiStateRadioBox from './_utils/MultiStateRadioBox'
// import { CustomSkin, TriStateSkin, wallSwitch } from './_utils/Skins';
import { MultiStateButton } from './_utils/Skins';
// import MultiStateCheckBox from './_utils/MultiStateCheckBox';
import defaultTheme from './../../../default-theme.json';
import { useConfig } from '@/context/ThemeContext';
import { replacePlaceholders } from '@/services/StyleService';
import RadioLogic from '@/components/input/Radio/Radio.logic';
import {RadioUiHtml, RadioUiSvg} from '@/components/input/Radio/Radio.ui';

const Page = () => {
    const config = useConfig();
    const [currentValue, setCurrentValue] = useState('A');
    // const [currentValue2, setCurrentValue2] = useState('Good');
    // const [currentValue3, setCurrentValue3] = useState('checked');
    // const [currentValue4, setCurrentValue4] = useState('checked');
    const [currentValue5, setCurrentValue5] = useState('Good');
    const [selectedTheme, setSelectedTheme] = useState('default');

    useEffect(() => {
        const downloadTheme = async (name:string) => {
            await fetch(`/api/theme?name=${name}`)
                    .then(async (response) => {
                        if (response.ok) {
                            const newTheme = await response.json();
                            const updatedConfig = replacePlaceholders(newTheme); 
                            config.setTheme(updatedConfig); 
                        } else {
                        console.error('Failed to fetch new theme:', await response.json());
                        }
                    })
                    .catch((err) => {
                        console.error('Error downloading or applying theme:', err);
                    });
            
        }

        if(selectedTheme == 'default') {
            const updatedConfig = replacePlaceholders(defaultTheme);
            config.setTheme(updatedConfig)
        }else{
            downloadTheme(selectedTheme);
        }
    }, [selectedTheme])

    const onChange = (val:string) => {
        setCurrentValue(val);
    }

    // const onChange2 = (val:string) => {
    //     setCurrentValue2(val);
    // }

    // const onChange3 = (val:string) => {
    //     setCurrentValue3(val);
    // }

    // const onChange4 = (val:string) => {
    //     setCurrentValue4(val);
    // }

    const onChange5 = (val:string) => {
        setCurrentValue5(val);
    }

    return (
        <div>
            <label htmlFor="theme">Choose a theme:</label>
            <select name="theme" id="theme" value={selectedTheme} onChange={(e) => setSelectedTheme(e.target.value)}>
                <option value="default">Default Theme</option>
                <option value="new-theme">New Theme</option>
                <option value="dark-theme">Dark Theme</option>
            </select> 
            <div className='mb-2 mt-10'>
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
            {/* <div className='mt-2'>
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
            <hr/> */}
            <div className='mt-2'>
                <RadioLogic 
                    dataSource={['Good', 'Bad', 'Avg','Worst']} 
                    defaultValue={currentValue5} 
                    name={'test5'} 
                    actions={{
                        onChange:onChange5
                    }}
                    Skin={RadioUiSvg}
                />
                <div>{currentValue5}</div>
            </div>
            <hr/>
            <div className='mt-2'>
                <RadioLogic 
                    dataSource={['Good', 'Bad', 'Avg','Worst']} 
                    defaultValue={currentValue5} 
                    name={'test5'} 
                    actions={{
                        onChange:onChange5
                    }}
                    Skin={RadioUiHtml}
                />
                <div>{currentValue5}</div>
            </div>
        </div>
    )
}

export default Page