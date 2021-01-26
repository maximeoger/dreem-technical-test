import React, { ChangeEvent } from 'react';
import { Input } from 'antd';

type OnChangeFunction = (event: ChangeEvent<HTMLInputElement>) => void;

interface IProps {
  name: string;
  value: string;
  rows?: number;
  onChange: (value: string) => void;
}

const INPUT_TYPE = 'textArea';

export default function InputText ({rows=4, ...props}: IProps) {
  const onChange : OnChangeFunction = (event) => props.onChange(event.target.value);
  return(
    <Input 
      type={INPUT_TYPE}
      onChange={onChange} 
      value={props.value}
    />
  )
}