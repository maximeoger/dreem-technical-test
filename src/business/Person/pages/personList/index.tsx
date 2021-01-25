import React, { useState } from 'react';
import { Table } from 'antd';
import useRequest from 'technical/request/services';
import { trigger, mutate } from 'swr';
import { Space } from 'antd';
import { Link } from 'react-router-dom';
import { deletePerson } from 'business/Person/services';
import { routes } from 'technical/routes';

const PAGINATION_LIMIT = 20;

export default function PersonList() {
  const [ page, setPage ] = useState<number>(1);
  const { loading, data, totalCount } = useRequest(['/persons', page, PAGINATION_LIMIT]);

  return (
    <Table 
      columns={[
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
          render: (text: string, record: any) => {
            return(
              <Space size="middle">
                <Link to={`${routes.personDetails.replace(':id', record.id)}`}>See {record.name} details</Link>
                <a onClick={() => {
                  mutate('/persons', data.filter((person: any) => person.id !== record.id), false);
                  deletePerson(record.id)
                  trigger('/persons')
                }}>Delete {record.name}</a>
              </Space>
            )},
        },
      ]} 
      dataSource={data || []} 
      loading={loading}
      pagination={{
        onChange: (nextPage: number) => setPage(nextPage),
        pageSize: PAGINATION_LIMIT,
        total: totalCount,
        simple: true
      }}
    />
  )
};