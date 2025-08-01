import React from 'react';

import { Button as MuiButton } from '@mui/material';

import { IButtonProps } from './interfaces';

export const Button = ({
  backgroundColor,
  size,
  text,
  disabled,
  fullWidth,
  variant,
  color,
  ...props
}: IButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      style={{ backgroundColor }}
      {...props}
    >
      {text}
    </MuiButton>
  );
};
