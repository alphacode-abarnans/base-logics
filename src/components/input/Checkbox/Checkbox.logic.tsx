'use client'
import React, { ComponentType } from 'react';
import { Isize } from './Checkbox.ui';

interface SkinProps {
    value: string,
    disabled: boolean
    size: Isize
}

interface CheckboxProps {
    id: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean,
    Skin: ComponentType<SkinProps>
    size: Isize;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange, disabled = false, Skin, size }) => {

    return (
        <div>

            <input
                id={id}
                type="checkbox"
                name='checkbox-x'
                defaultChecked={checked}
                onClick={() => { onChange(!checked); }}
                disabled={disabled}
                className='sr-only'
                // style={{display:'none'}}
            />

            <label htmlFor={id}>
                <Skin value={checked ? 'checked' : 'not_checked'} disabled={disabled} size={size} />
            </label>

        </div>
    );
};
export default Checkbox;