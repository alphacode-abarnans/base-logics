import React from 'react';
import {LoadingSkinProps, SkinProps} from "@/components/button/Button.logic";
import {ISize} from "@/interfaces/Common.types";

export const buttonSkin1 = ({content,disabled,size}: SkinProps) => {
    const defaultSize:{[key in ISize]:string} = {
        'sm' : 'py-1 px-2',
        'md' : 'py-2 px-4',
        'lg' : 'py-4 px-10',
        'xl' : 'py-8 px-16'
    }

  return (
      <div
          className={`${defaultSize[size]} rounded-md bg-gray-200 font-medium text-gray-800 ${disabled ? "cursor-default opacity-60" : "cursor-pointer hover:bg-gray-300"}`}>
          {content}
      </div>
  )
}

export const buttonSkin2 = ({content,disabled,size}: SkinProps) => {
    const defaultSize:{[key in ISize]:string} = {
        'sm' : 'py-1 px-2',
        'md' : 'py-2 px-4',
        'lg' : 'py-4 px-10',
        'xl' : 'py-8 px-16'
    }

    return (
      <div
          className={`${defaultSize[size]} rounded-md bg-blue-600 font-medium text-white ${disabled ? "cursor-default opacity-60" : "cursor-pointer hover:bg-blue-800"}`}>
          {content}
      </div>
  )
}

export const loadingButtonSkin1 = ({content,disabled,size}: LoadingSkinProps) => {
    const defaultSize:{[key in ISize]:string} = {
        'sm' : 'py-1 px-2',
        'md' : 'py-2 px-4',
        'lg' : 'py-4 px-10',
        'xl' : 'py-8 px-16'
    }

    return (
        <div
            className={`${defaultSize[size]} rounded-md bg-red-600 font-medium text-white ${disabled ? "cursor-default opacity-60" : "cursor-pointer hover:bg-red-800"}`}>
            {content}
        </div>
    )
}
