import React, { ChangeEvent, RefObject } from 'react';
import { Input } from 'antd';

type OnChangeFunction = (event: ChangeEvent<HTMLInputElement>) => void;

interface IProps {
  name: string;
  ref?: RefObject<Input> | undefined;
  value: string;
  onChange: (value: string) => void;
}

const INPUT_TYPE = 'text';

export default function InputText (props: IProps) {
  const onChange : OnChangeFunction = (event) => props.onChange(event.target.value);
  return(
    <Input
      type={INPUT_TYPE}
      onChange={onChange} 
      value={props.value}
    />
  )
}