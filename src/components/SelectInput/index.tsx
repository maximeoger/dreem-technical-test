import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

type OnChangeFunction = (value: string) => void;

interface IProps {
  name: string;
  value: string;
  options?: string[];
  onChange: (value: string) => void;
}

export default function CustomSelect (props: IProps) {
  const onChange : OnChangeFunction = (value) => props.onChange(value);
  return(
    <Select 
      defaultValue={props.value} 
      onChange={onChange}>
        {
          props.options?.map(
           (option, key) => (<Option key={key} value={option}>{option}</Option>)
          )
        }
    </Select>
  )
}