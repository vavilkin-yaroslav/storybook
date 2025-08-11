import React from 'react';
import { TextField as MuiTextField } from '@mui/material';

import { IInputProps } from './interfaces';

export const Input = ({
  placeholder,
  variant,
  color,
  size,
  fullWidth,
  error,
  helperText,
  className,
  onChange,
  ...props
}: IInputProps) => {
  return (
    <MuiTextField
      onChange={onChange}
      placeholder={placeholder}
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      error={error}
      helperText={helperText}
      className={className}
      {...props}
    />
  );
};
