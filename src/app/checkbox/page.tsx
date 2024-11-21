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
          <Checkbox id={'1'} checked={isChecked} onChange={setIsChecked} Skin={toggle} disabled={false}/> <br/> <br/>
          <Checkbox id={'disabled-1'} checked={false} onChange={() => {
          }} Skin={toggle} disabled={true}/> <br/> <br/>

          <Checkbox id={'2'} checked={isChecked1} onChange={setIsChecked1} Skin={switcher} disabled={false}/> <br/>
          <Checkbox id={'disabled-2'} checked={false} onChange={() => {
          }} Skin={switcher} disabled={true}/> <br/>

          <div className="flex items-center justify-center gap-5 min-h-screen bg-gray-100">
                  <Checkbox id={'3'} checked={isChecked2} onChange={setIsChecked2} Skin={wallswitch} disabled={false}/>
                  <br/>
                  <Checkbox id={'disabled-3'} checked={false} onChange={() => {
                  }} Skin={wallswitch} disabled={true}/> <br/>
              <Checkbox id={'disabled-4'} checked={true} onChange={() => {
              }} Skin={wallswitch} disabled={true}/> <br/>
          </div>
      </div>
  )
}

