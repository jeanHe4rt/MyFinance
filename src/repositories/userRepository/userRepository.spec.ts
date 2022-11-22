import {test, expect} from 'vitest';
import { Users } from '../../entities/users/users';
import { UserRepository } from './userRepository';

test('Create new User by User Repository', async () => {
  const repository = new UserRepository();

  const user = new Users();
  user.name = 'Jean test';
  user.email = 'jean@teste.com';
  user.password = '123456';

  await repository.save(user);
  
  const list = await repository.getAll();
  const count = list.length;

  expect(count).gte(1);
});

test('Update User by User Repository', async () => {
  const repository = new UserRepository();

  const newUser = new Users();
  newUser.name = 'Jean Alterado';
  newUser.email = 'jean@teste.com';
  newUser.password = '123456';

  const userOld = new Users();
  userOld.id = '321654';
  userOld.name = 'Jean test';
  userOld.email = 'jean@teste.com';
  userOld.password = '123456';

  await repository.save(userOld);

  await repository.update('321654', newUser);
  
  const user = await repository.getById('321654');

  expect(user.name).toBe('Jean Alterado');
});
test('Delete User by User Repository', async () => {
  const repository = new UserRepository();

  const user = new Users();
  user.id = '123456798';
  user.name = 'Jean Alterado';
  user.email = 'jean@teste.com';
  user.password = '123456';

  await repository.delete('123456798');
  
  const getUser = await repository.getById('123456798');
  

  expect(getUser).toBe(null);
});