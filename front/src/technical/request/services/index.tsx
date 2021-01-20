import { AxiosResponse, AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import axios from 'technical/request';

type IHttpError = {
  status: number;
  message: string;
}

export default function useRequest(url: string, config?: AxiosRequestConfig ) {
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  function getData () {
    axios.get(url, config)
    .then(response => {
      setData(response.data);
    })
    .catch(err => setError(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return {
    loading: !data,
    data, 
    error
  };
}