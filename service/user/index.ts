import {InfoAPI} from '../../types';

export async function createUser(data: InfoAPI) {
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return response;
}
