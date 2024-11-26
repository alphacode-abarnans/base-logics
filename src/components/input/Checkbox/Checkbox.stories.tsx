/* eslint-disable import/no-anonymous-default-export */
import Checkbox from './Checkbox.logic';
import { checkboxUiTrue } from './Checkbox.ui';


export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    id: 'checkbox1',
    checked: false,
    size: 'md',
    onChange: console.log('Checkbox toggled'),
    Skin: checkboxUiTrue,
  },
};

export const Default = {
  args: {
    id: 'checkbox1',
    checked: false,
    size: 'md',
    onChange: console.log('Checkbox toggled'),
    Skin: checkboxUiTrue,
  },
};

export const Checked = {
  args: {
    id: 'checkbox1',
    checked: true,
    size: 'md',
    onChange: console.log('Checkbox toggled'),
    Skin: checkboxUiTrue,
  },
};

export const Small = {
  args: {
    id: 'checkbox1',
    checked: false,
    size: 'sm',
    onChange: console.log('Checkbox toggled'),
    Skin: checkboxUiTrue,
  },
};

export const Large = {
  args: {
    id: 'checkbox1',
    checked: false,
    size: 'lg',
    onChange: console.log('Checkbox toggled'),
    Skin: checkboxUiTrue,
  },
};

export const ExtraLarge = {
  args: {
    id: 'checkbox1',
    checked: false,
    size: 'xl',
    onChange: console.log('Checkbox toggled'),
    Skin: checkboxUiTrue,
  },
};
