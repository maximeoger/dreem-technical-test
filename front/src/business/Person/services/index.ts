import { AxiosResponse } from 'axios';
import axiosInstance from 'technical/request';
import { RequestParams } from 'technical/request/services/types';

export async function getPersons(params?: RequestParams): Promise<AxiosResponse<any>> {
  return axiosInstance.get('/persons', { params }).catch(err => { throw Error(err) });
}