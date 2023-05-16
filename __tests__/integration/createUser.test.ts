import {createUser} from '../../service/user';

it('response with ok status', async () => {
  const response = await createUser({name: 'Kanor, Mang', job: 'Sponsor'});
  expect(response.ok).toBeTruthy();
});
