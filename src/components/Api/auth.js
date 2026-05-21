import axios from 'axios';

const LOGIN_API_URL = 'https://doc-p-api-elr-dev.hcck8s-elr-np101.optum.com/login';

export async function login({ username, password }) {
  return axios.post(
    LOGIN_API_URL,
    { id: username, passw: password },
    {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    }
  );
}