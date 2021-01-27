import React from 'react';
import { Ref, RegisterOptions } from 'react-hook-form';
import { Input } from 'antd';
import DatePicker from 'components/DatePicker';
import TextInput from 'components/TextInput';
import TextArea from 'components/TextArea';
import Select from 'components/SelectInput';
import './index.css';

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
  ref?: any,
  value: string | Date | any;
  name: string;
  onChange?: (value: string) => void;
}

function renderInput({ type, ...inputArgs }: Omit<IProps, 'toggleInput'>) {
  switch(type){
    case InputTypes.Text:
      return (<TextInput {...inputArgs}/>)

    // case InputTypes.Date:
    //   return (<DatePicker {...inputArgs}/>)

    // case InputTypes.TextArea:
    //   return (<TextArea {...inputArgs}/>)

    // case InputTypes.Select:
    //   return (<Select {...inputArgs}/>)
    
    default:
      return null
  }
}

export default function InputSwitcher(props: IProps) {
  return props.toggleInput === true ? renderInput(props) : <div className={"container"}><p>{props.value}</p></div>
}