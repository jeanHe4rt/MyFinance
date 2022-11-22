import { Users } from "../entities/users/users";

export let inMemory_UsersRepository: Array<Users> = [
  {
    id: '123456',
    email: 'jean@teste.com',
    name: 'Jean Teste',
    password: '123456'
  }
]