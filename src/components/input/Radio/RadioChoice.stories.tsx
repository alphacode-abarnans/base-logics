/* eslint-disable import/no-anonymous-default-export */
import { rattingDummyData } from "@/app/multi-state-chcekbox/_utils/dummyData";
import { RadioChoice } from "./Radio.logic";
import { RadioUiHtml, RadioUiSvg } from "./Radio.ui";


export default {
  title: 'Example/RadioChoice',
  component: RadioChoice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    dataSource:rattingDummyData,
    defaultValue:{ id : 1, lbl : "Good", val : "good" },
    name:'SVG TEST 1',
    size:'md',
    actions:{ onChange: (val : any) => {} },
    Renderer:RadioUiSvg, 
    resolver:(val:any) => ({ value: val?.val, label: val?.lbl, key: val.id })
  },
};

export const Default = {
  args: {
    dataSource:rattingDummyData,
    defaultValue:{ id : 1, lbl : "Good", val : "good" },
    name:'SVG TEST 1',
    size:'md',
    actions:{ onChange: (val : any) => {} },
    Renderer:RadioUiSvg, 
    resolver:(val:any) => ({ value: val?.val, label: val?.lbl, key: val.id })     
  },
};

export const HtmlInput = {
    args: {
      dataSource:rattingDummyData,
      defaultValue:{ id : 1, lbl : "Good", val : "good" },
      name:'HTML TEST 1',
      size:'md',
      actions:{ onChange: (val : any) => {} },
      Renderer:RadioUiHtml, 
      resolver:(val:any) => ({ value: val?.val, label: val?.lbl, key: val.id })       
    },
};

export const Size = {
  args: {
    dataSource:rattingDummyData,
    defaultValue:{ id : 1, lbl : "Good", val : "good" },
    name:'HTML TEST 2',
    size:'lg',
    actions:{ onChange: (val : any) => {} },
    Renderer:RadioUiHtml, 
    resolver:(val:any) => ({ value: val?.val, label: val?.lbl, key: val.id })  
  },
};

export const Disabled = {
  args: {
    dataSource:rattingDummyData,
    defaultValue:{
      "lbl": "Good",
      "val": "good"
    },
    name:'HTML TEST 3',
    size:'lg',
    disabled:true,
    actions:{ onChange: (val : any) => {} },
    Renderer:RadioUiHtml, 
    resolver:(val:any) => ({ value: val?.val, label: val?.lbl, key: val.id })  
  },
};

