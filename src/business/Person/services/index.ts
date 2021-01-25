import { AxiosResponse } from 'axios';
import axiosInstance from 'technical/request';

export async function gerPersonDetails(id: string): Promise<AxiosResponse<any>> {
  return axiosInstance.get(`/persons/${id}`).catch(err => { throw Error(err) });
}

export async function deletePerson(id: string): Promise<AxiosResponse<any>> {
  return axiosInstance.delete(`/persons/${id}`).catch(err => { throw Error(err) });
}