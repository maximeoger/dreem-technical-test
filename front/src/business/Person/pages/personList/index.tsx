import React, { useEffect, useState, useContext, useMemo } from 'react';
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from 'technical/routes';
import { FilterDropDown } from 'components/Table/FilterDropDown';
import { SearchOutlined } from "@ant-design/icons";
import { PersonContext } from 'business/Person/state';

const PAGINATION_LIMIT = 20;

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

export default function PersonList() {
  const [ page, setPage ] = useState<number>(1);
  const { getPersonList, persons, totalCount } = useContext(PersonContext);

  useMemo(() => {
    getPersonList({ _page: page, _limit: PAGINATION_LIMIT });
  }, [page])
  

  const paginationConfig = {
    onChange: (nextPage: number) => setPage(nextPage),
    pageSize: PAGINATION_LIMIT,
    total: totalCount || 0,
    simple: true
  }

  return (
    <Table 
      columns={TABLE_COLUMNS} 
      dataSource={persons || []} 
      loading={!persons}
      pagination={paginationConfig}
    />
  )
};