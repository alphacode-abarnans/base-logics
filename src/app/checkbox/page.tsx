'use client'
import React, { useState } from 'react'
import Checkbox from './_utils/checkbox';
import { switcher, toggle, wallswitch } from './_utils/checkboxSkin';

export default function Page ()  {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

  return (
    <div className='p-5'>
      <Checkbox id={'1'} checked={isChecked} onChange={setIsChecked} Skin={toggle}/> <br/> <br/> 
      <Checkbox id={'2'} checked={isChecked1} onChange={setIsChecked1} Skin={switcher}/> <br/>
      <Checkbox id={'3'} checked={isChecked2} onChange={setIsChecked2} Skin={wallswitch}/> <br/>

        <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="relative inline-flex w-24 h-12 bg-gray-300 rounded-full shadow-inner">
     
      <span
        className="absolute left-0 w-12 h-12 bg-white rounded-full shadow-md transition-transform transform"
        id="toggleSlider"
      ></span>
    
      <div className="absolute inset-0 flex justify-between items-center px-3 text-gray-700 text-sm font-medium">
        <span>ON</span>
        <span>OFF</span>
      </div>
    </div>
  </div>
      </div>
  )
}

