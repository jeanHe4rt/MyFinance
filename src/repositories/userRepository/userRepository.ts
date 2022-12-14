import { Users } from '../../entities/users/users';
import { BaseRepository } from '../base/baseRepository';
import { inMemory_UsersRepository  } from './../../database/inMemoryUserRepository';

export class UserRepository extends BaseRepository<Users> {
  
  constructor(){
    super();
  }

  save  = async (item: Users): Promise<string> => {
    try {
      await inMemory_UsersRepository.push(item);
      return 'Create new User successfully';
    } catch (error) {
      return 'Create new User failed. Error: ' + error.message;
    }
  }
  update = async (id: string, newUser: Users): Promise<string> => {
    let userId = id;
    try {
      let index = await inMemory_UsersRepository.findIndex((x) => x.id == userId);
      if (index === null)
        return '';

      let user = await inMemory_UsersRepository.find((x) => x.id === userId);
      if(user != null){
        await this.delete(user.id);
        const id = user.id;
        user = newUser;
        user.id = id;
        inMemory_UsersRepository.push(user);
        return `Successfully update User ${user.id}`;
      } else {
        return 'User is not found!'
      }
    } catch (error) {
      return 'Update user failed. Error: ' + error.message;
    }
  }
  delete = async (id: string): Promise<string> => {
    try {
      let startIndex: number = await inMemory_UsersRepository.findIndex(
        (x) => x.id === id
      );
      if (startIndex == null) return 'User is not found!';
      const deleteCount = 1;

      if (startIndex !== -1){
        await inMemory_UsersRepository.splice(startIndex, deleteCount);
        return 'User deleted successfully';
      }
      else {  
        await inMemory_UsersRepository.splice(startIndex, deleteCount);
        return 'User deleted successfully';
      }
    } catch (error) {
      return 'Error while deleting user: ' + error.message;
    }
  }
  getById = async(id: string): Promise<any> => {
    const user = await inMemory_UsersRepository.find((x) => x.id === id);
    if (!user)
      return null;

    return user;
  }
  getAll = async (): Promise<Users[]> => {
    return inMemory_UsersRepository;
  }
}
