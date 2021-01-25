import React from 'react';
import useSwr from 'swr';
import axiosInstance from 'technical/request';

const fetcher = (url: string, page?: number, limit?: number) => {
  return axiosInstance(url, { params: { _page: page, _limit: limit } }).then(response => response);
}

export default function useRequest(requestArgs: any) {
  const { data, error } = useSwr(requestArgs, fetcher);

  return {
    loading: !data,
    data: data?.data || null, 
    totalCount: data?.headers['x-total-count'] || null,
    error
  };
}