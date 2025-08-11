import React from 'react';
import {
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Select as MuiSelect,
} from '@mui/material';

import { ISelectProps } from './interfaces';

export const Select = ({
  value,
  options,
  label,
  variant,
  size,
  fullWidth,
  error,
  helperText,
  disabled,
  className,
  onChange,
  ...props
}: ISelectProps) => {
  return (
    <FormControl
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      error={error}
      className={className}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <MuiSelect
        style={{ minWidth: '250px' }}
        value={value}
        onChange={onChange}
        disabled={disabled}
        label={label}
        {...props}
      >
        {options.map((option, index) => (
          <MenuItem key={crypto.randomUUID()} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl >
  );
};
