import React from 'react';
import style from './Button.module.css';

export const Button = ({outline, children, openModal}) => {
  
  const outlineStyle = outline ? style.outlineBtn : '';

  return (
    <button onClick={() => openModal()}className={`${style.btn} ${outlineStyle}`}>
      {children}
    </button>
  )
}