import React from 'react';
import { Input, DatePicker, Select } from 'antd';
import moment from 'moment';

const { Option } = Select;

enum InputTypes {
  Select = "select",
  Text = "text",
  TextArea = "textArea",
  Date = "date"
}

interface IProps {
  toggleInput: boolean;
  type: 'select' | 'textArea' | 'date' | 'text';
  options?: string[],
  rows?: number,
  value: string | Date | any;
  name: string;
  onChange: (e: any) => void;
}

const dateFomat = "YYYY/MM/DD";

const normalizeValue = (val: any) => console.log(val, typeof val);

function renderInput({ type, options, value, onChange, ...inputArgs }: Omit<IProps, 'toggleInput'>) {
  switch(type){
    case InputTypes.Text:
      return (<Input type={InputTypes.Text} onChange={normalizeValue} value={value} {...inputArgs}/>)

    case InputTypes.Date:
      return (<DatePicker defaultValue={moment(value, dateFomat)} onChange={normalizeValue} format={dateFomat}/>)

    case InputTypes.TextArea:
      return (<Input type={InputTypes.TextArea} value={value} onChange={normalizeValue}  {...inputArgs}/>)

    case InputTypes.Select:
      return (<Select defaultValue={value} onChange={normalizeValue} >{options?.map(option => (<Option value={option}>{option}</Option>))}</Select>)
    
    default:
      return null
  }
}

export default function InputSwitcher(props: IProps) {
  return props.toggleInput === true ? renderInput(props) : <p>{props.value}</p>
}