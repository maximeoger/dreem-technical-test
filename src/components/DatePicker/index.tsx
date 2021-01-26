import React from 'react';
import moment, { Moment } from 'moment';
import { DatePicker } from 'antd';


const DATE_FORMAT = "YYYY-MM-DD";

type OnChangeFunction = (date: Moment | null, dateString: string) => void;

interface IProps {
  name: string;
  value: string;
  onChange: (value: string) => void;

}

export default function CustomDatePicker (props: IProps) {
  const onChange: OnChangeFunction = (date, dateString) => props.onChange(dateString);
  return(
    <DatePicker 
      defaultValue={moment(props.value, DATE_FORMAT)}
      name={props.name}
      onChange={onChange} 
      format={DATE_FORMAT}/>
  )
}