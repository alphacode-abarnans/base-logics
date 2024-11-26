/* eslint-disable import/no-anonymous-default-export */
import { fn } from '@storybook/test';
import Checkbox from './Checkbox.logic';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onChange arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: 'Checkbox',
    checked: false,
    size: 'medium', // Assuming you support size props
    color: 'black', // Optional color prop
  },
};

export const Checked = {
  args: {
    label: 'Checkbox',
    checked: true,
    size: 'medium',
    color: 'green',
  },
};

export const Small = {
  args: {
    label: 'Small Checkbox',
    checked: false,
    size: 'small',
    color: 'blue',
  },
};

export const Large = {
  args: {
    label: 'Large Checkbox',
    checked: false,
    size: 'large',
    color: 'red',
  },
};
