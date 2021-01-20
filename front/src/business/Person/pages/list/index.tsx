import React from 'react';
import { Table, Space, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from 'technical/routes';
import useRequest from 'technical/request/services';

const TABLE_COLUMNS = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Date of Birth',
    dataIndex: 'dob',
    key: 'dob',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (text: string, record: any) => (
      <Space size="middle">
        <Link to={`${routes.personDetails}/${record.id}`}>See {record.name} details</Link>
        <a>Delete {record.name}</a>
      </Space>
    ),
  },
];

export default function List() {
  const { data } = useRequest('/persons');
  return (
   <Table dataSource={data} columns={TABLE_COLUMNS}/>
  )
};