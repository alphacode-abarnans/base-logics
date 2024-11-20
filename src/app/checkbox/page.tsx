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
    </div>
  )
}

