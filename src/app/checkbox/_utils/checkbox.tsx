'use client'
import React, { ComponentType } from 'react';
interface SkinProps {value:string}
interface CheckboxProps {id: string; checked: boolean; onChange: (checked: boolean) => void; disabled?: boolean, Skin: ComponentType<SkinProps>}

const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange, disabled = false, Skin }) => {

  return (
    <div>

      <input 
        type="checkbox" 
        id={id} 
        name='checkbox-x'
        defaultChecked={checked} 
        onClick={() => {onChange(!checked); console.log('target',checked); }} 
        disabled={disabled} 
        className='sr-only'
      />

      <label htmlFor={id}>
        <Skin value={checked? 'checked' : 'not_checked'}/>
      </label>
      
    </div>
  );
};
export default Checkbox;