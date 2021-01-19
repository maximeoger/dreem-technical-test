import { AxiosResponse } from 'axios';
import axiosInstance from 'technical/request';

export async function getPersons(): Promise<AxiosResponse<any>> {
  return axiosInstance.get('/persons').catch(err => { throw Error(err) });
}