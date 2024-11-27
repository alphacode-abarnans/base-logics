/* eslint-disable import/no-anonymous-default-export */
import { Radio, RadioGroup } from "./Radio.logic";
import { RadioUiSvg2 } from "./Radio.ui";


export default {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    size:'lg',
    DefaultRenderer:RadioUiSvg2, 
    children: (
      <>
        <Radio key={'1'} name={'radio-btn'} value={'good'} Renderer={RadioUiSvg2} label={'Good'} />
        <Radio key={'2'} name={'radio-btn'} value={'bad'} Renderer={RadioUiSvg2} label={'Bad'} />
      </>
    )
  },
};

export const Default = {
  args: {
    size:'lg',
    DefaultRenderer:RadioUiSvg2,
    children: (
      <>
        <Radio key={'1'} name={'radio-btn'} value={'good'} Renderer={RadioUiSvg2} label={'Good'} />
        <Radio key={'2'} name={'radio-btn'} value={'bad'} Renderer={RadioUiSvg2} label={'Bad'} />
      </>
    )
  },
};
