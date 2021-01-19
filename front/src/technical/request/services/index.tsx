import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import axios from 'technical/request';

type IHttpError = {
  status: number;
  message: string;
}

export default function useRequest(endpoint: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function getData () {
    
      await axios.get(endpoint)
      .then(response => {
        console.log(response);
        setData(response);
        setLoading(false);
      })
      .catch(err => setError(err));
       
    }
  }, []);

  return {loading, data, error};
}