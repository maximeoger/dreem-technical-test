import React from 'react';
import useRequest from 'technical/request';
import { getPersons } from 'business/Person/services';

export default function List() {
  const { loading, data, error } = useRequest('/persons');
  console.log({ loading, data, error })
  return (
    <div>
      <p>Liste</p>
    </div>
  )
};