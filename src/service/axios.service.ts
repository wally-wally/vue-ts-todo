import axios, { AxiosInstance } from 'axios';

// HTTP 통신을 위한 기본 설정
export default class AxiosService {
  static readonly instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    // headers: {},
    timeout: 100000, // 10[s]
  });
}
