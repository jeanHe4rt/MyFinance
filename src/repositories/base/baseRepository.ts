import { Base } from './../../entities/base/base';
export interface IBaseRepository<T> {
  save(item: T): Promise<string>;
  update(id: string, item: T): Promise<string>;
  delete(id: string): Promise<string>;
  getById(id: string): Promise<string>;
  getAll(): Promise<T[]>;
}

export abstract class BaseRepository<T extends Base> implements IBaseRepository<T> {
  repository: T[];
  
  async save(item: T): Promise<string> {
    try {
      await this.repository.push(item);
      return '';
    } catch (error) {
      return 'Error: ' + error.message;
    }

  }
  async update(id: string, newUser: T): Promise<string> {
    try {
      let user = await this.repository.findIndex(x => x.id === id) ?? 'Not found!';
      if (typeof user === 'string')
        return user;
      
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
  async delete(id: string): Promise<string> {
    try {
      let startIndex: number = await this.repository.findIndex(x => x.id === id);
      if (!startIndex)
        return 'Not found!';
      const deleteCount = 1;

      if (startIndex !== -1) 
        await this.repository.splice(startIndex, deleteCount);
      
      await this.repository.splice(startIndex, deleteCount);
    
    } catch (error) {
      return 'Error while deleting: ' + error.message;
    }
  }
  async getById(id: string): Promise<any> {
    const user = await this.repository.find(x => x.id === id);
    if (!user) 
      return 'Not found'
    
      return user;
  }
  async getAll(): Promise<T[]> {
    return  this.repository;
  }

}