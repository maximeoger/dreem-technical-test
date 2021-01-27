import React, { ChangeEvent, RefObject } from 'react';
import { Input } from 'antd';
import { Ref } from 'react-hook-form';

type OnChangeFunction = (event: ChangeEvent<HTMLInputElement>) => void;

interface IProps {
  name?: string;
  ref?: any;
  value?: string;
  onChange?: (value: string) => void;
}

const INPUT_TYPE = 'text';

export default function InputText ({ref, ...props}: IProps) {
  //const onChange : OnChangeFunction | null = props.onChange ? (event) => props.onChange(event.target.value) ;
  return(
    <Input
      ref={ref}
      type={INPUT_TYPE}
    //  onChange={onChange} 
      //value={props.value}
    />
  )
}