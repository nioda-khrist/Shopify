import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@material-ui/core';
import { ErrorMessage } from 'formik';
import React from 'react';
import TextError from './TextError';

const Select = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <FormControl>
      <InputLabel id={name}>{label}</InputLabel>
      <MuiSelect
        labelId={name}
        id={name}
        name={name}
        {...rest}
        autoWidth={true}
      >
        {options?.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.key}
            </MenuItem>
          );
        })}
      </MuiSelect>
      <ErrorMessage name={name} component={TextError} />
    </FormControl>
  );
};

export default Select;
