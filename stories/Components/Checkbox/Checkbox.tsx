import React from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

import { ICheckboxProps } from './interfaces';

export const Checkbox = ({
  label,
  color,
  indeterminate,
  className,
  checked,
  onChange,
  ...props
}: ICheckboxProps) => {
  const checkboxElement = (
    <MuiCheckbox
      color={color}
      indeterminate={indeterminate}
      className={className}
      onChange={onChange}
      checked={checked}
      {...props}
    />
  );

  return label ? (
    <FormControlLabel control={checkboxElement} label={label} checked={checked} />
  ) : (
    checkboxElement
  );
};
