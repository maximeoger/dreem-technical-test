import React, { useState, createContext, useEffect } from 'react';
import { getPersons } from 'business/Person/services';
import { RequestParams } from 'technical/request/services/types';

interface IPersonContext {
  getPersonList: (params?: RequestParams) => void,
  persons: any[] | null;
  totalCount: number | null;
}

export const PersonContext = createContext<IPersonContext>({
  getPersonList: () => {},
  persons: null,
  totalCount: null
});

function usePersonStateProvider() {
  const [ persons, setPersons ] = useState(null);
  const [ totalCount, setTotalCount ] = useState(null);

  const getPersonList = async (params?: RequestParams) => {
    const response = await getPersons(params);
    setPersons(response.data);
    setTotalCount(response.headers['x-total-count']);
  }

  return {
    getPersonList,
    persons,
    totalCount
  }
};

export const PersonProvider: React.FC = ({children}) => {
  const value = usePersonStateProvider();

  return (
    <PersonContext.Provider value={value}>
      {children}
    </PersonContext.Provider>
  )
}