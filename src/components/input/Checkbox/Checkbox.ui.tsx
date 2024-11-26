import React from 'react';

export type Isize = 'sm' | 'md' | 'lg' | 'xl'

const sizeMap = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

type SizeKey = keyof typeof sizeMap;

export const checkboxUiTrue = ({ size = 'md' }: { size?: Isize }) => {
  const dimension = sizeMap[size] || sizeMap['md'];
  return (
    <div>
      <svg width={dimension} height={dimension} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z" fill="black"/>
        <path d="M12 5L6.5 10.5L4 8" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export const checkboxUiFalse = ({ size = 'md' }: { size?: SizeKey }) => {
  const dimension = sizeMap[size] || sizeMap['md'];
  return (
    <div>
      <svg width={dimension} height={dimension} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H12C13.933 0.5 15.5 2.067 15.5 4V12C15.5 13.933 13.933 15.5 12 15.5H4C2.067 15.5 0.5 13.933 0.5 12V4Z" fill="#F9FAFB"/>
        <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H12C13.933 0.5 15.5 2.067 15.5 4V12C15.5 13.933 13.933 15.5 12 15.5H4C2.067 15.5 0.5 13.933 0.5 12V4Z" stroke="#D0D5DD"/>
        <path d="M12 5L6.5 10.5L4 8" stroke="#D0D5DD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};
