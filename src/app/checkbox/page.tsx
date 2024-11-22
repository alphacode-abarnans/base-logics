'use client'
import React, { useState } from 'react'
import Checkbox from './_utils/checkbox';
import { toggle, wallswitch } from './_utils/checkboxSkin';
// import withA11y from '../Component/withA11Y';
// import HocDiv from '../button/HocButton';

export default function Page ()  {
  
    // const AccessibleButton = withA11y(HocDiv, {
    //   ariaLabel: 'Submit button',
    //   role: 'button',
    //   dir:'rtl'  
    // });
  
    const [isChecked, setIsChecked] = useState(false);
    // const [isChecked1, setIsChecked1] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedOption, setSelectedOption] = useState<any>("toggle");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e:any) => {
      setSelectedOption(e.target.value); // Update state on selection
    };
  return (
    <div className="p-5">
  <div className="flex gap-5">
    {/* Left Section */}
    <div className="flex-shrink-0">
      <div className="h-80 w-40 bg-teal-50 rounded flex flex-col items-center p-2">
        <label className="mb-2">Skin</label>
        <select
          value={selectedOption}
          onChange={handleChange}
          className="bg-white border border-gray-300 rounded px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="toggle">Toggle</option>
          <option value="wallswitch">Wallswitch</option>
        </select>
        <p className="mt-4 text-gray-700">Selected: {selectedOption}</p>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex-grow">
      <input
        type="text"
        className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-gray-400"
        placeholder="Enter text here"
      />
      <div className="mt-4 space-y-4">


        <Checkbox
          id="1"
          checked={isChecked}
          onChange={setIsChecked}
          Skin={selectedOption=="toggle" ? toggle : wallswitch}
          disabled={true}
        />

          <Checkbox id={'1'} checked={isChecked} onChange={setIsChecked} Skin={toggle} disabled={false}/> <br/> <br/>
          <Checkbox id={'disabled-1'} checked={false} onChange={() => {
          }} Skin={toggle} disabled={true}/> <br/> <br/>
        {/* Uncomment this block if needed */}
        {/* <AccessibleButton onClick={() => {}}>
          <Checkbox
            id="5"
            checked={isChecked1}
            onChange={setIsChecked1}
            Skin={switcher}
          />
        </AccessibleButton> */}
      </div>
    </div>
  </div>
</div>
  )
}