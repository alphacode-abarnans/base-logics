import React from 'react';
import {SkinProps} from "@/components/button/Button.logic";

export const ButtonSkin1 = ({disabled, loading}: SkinProps) => {
  return (
      <div
          className={`rounded-md bg-gray-200 py-2 px-4 font-medium text-gray-800 ${disabled ? "cursor-default opacity-60" : "cursor-pointer hover:bg-gray-300"}`}>
        {loading?.isLoading && loading.direction === "start" && loading.skin}
        {loading?.isLoading && loading.direction === "replace" && loading.skin}
        {(loading?.isLoading && (loading.direction === "start" || loading.direction === "end") || !loading?.isLoading) && "Submit"}
        {loading?.isLoading && loading.direction === "end" && loading.skin}
      </div>
  )
}

export const ButtonSkin2 = ({disabled, loading}: SkinProps) => {
  return (
      <div
          className={`rounded-md bg-blue-600 py-2 px-4 font-medium text-white ${disabled ? "cursor-default opacity-60" : "cursor-pointer hover:bg-blue-800"}`}>
        {loading?.isLoading && loading.direction === "start" && loading.skin}
        {loading?.isLoading && loading.direction === "replace" && loading.skin}
        {(loading?.isLoading && (loading.direction === "start" || loading.direction === "end") || !loading?.isLoading) && "Submit"}
        {loading?.isLoading && loading.direction === "end" && loading.skin}
      </div>
  )
}
