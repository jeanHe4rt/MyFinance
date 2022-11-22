import { test, expect } from 'vitest';
import { Users } from './users';
test('Create new User', () => {
  const user = new Users();
  user.name = 'Jean test';
  user.email = 'jean@teste.com';
  user.password = '123456';

  expect(user).toBeInstanceOf(Users);
  expect(user.name).toEqual('Jean test');
})