import { Base } from './../../entities/base/base';
export interface IBaseRepository<T> {
  save(item: T): Promise<string>;
  update(id: string, item: T): Promise<string>;
  delete(id: string): Promise<string>;
  getById(id: string): Promise<string>;
  getAll(): Promise<T[]>;
}

export class BaseRepository<T extends Base> implements IBaseRepository<T> {
  repository: T[];
  
  save = async (item: T): Promise<string> => {
    try {
      await this.repository.push(item);
      return item.id;
    } catch (error) {
      return 'Error: ' + error.message;
    }

  }
  update = async (id: string, newUser: T): Promise<string> => {
    try {
      let user = await this.repository.findIndex(x => x.id === id);
      if (user == null)
        return '';
      
      user = await this.repository.find(x => x.id === id);
      await this.delete(user.id);
      const id  = user.id;
      user = newUser;
      user.id = id;
      this.repository.push(user);

    } catch (error) {
      return 'Update failed. Error: ' + error.message;
    }
  }
  delete = async(id: string): Promise<string> => {
    try {
      let startIndex: number = await this.repository.findIndex(x => x.id === id);
      if (!startIndex)
        return 'Not found!';
      const deleteCount = 1;

      if (startIndex !== -1) 
        await this.repository.splice(startIndex, deleteCount);
      else
        await this.repository.splice(startIndex, deleteCount);
    
    } catch (error) {
      return 'Error while deleting: ' + error.message;
    }
  }
  getById = async (id: string): Promise<any> => {
    const user = await this.repository.find(x => x.id === id);
    if (user == null) 
      return;
    
      return user;
  }
  
  getAll = async (): Promise<T[]> => {
    return  this.repository;
  }

}