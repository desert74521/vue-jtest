jest.mock('node-fetch');

import fetch from 'node-fetch';
const {Response} = jest.requireActual('node-fetch');

import {createUser} from '@/api/requestData';

test('createUser calls fetch with the right args and returns the user id', async () => {
  fetch.mockReturnValue(Promise.resolve(new Response('4')));
  const userId = await createUser();
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('http://website.com/users', {
    method: 'POST',
  });
  expect(userId).toBe('4');
});