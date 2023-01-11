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
      return '';
    } catch (error) {
      return 'Error: ' + error.message;
    }

  }
  update = async (id: string, newEntity: T): Promise<string> => {
    try {
      let index = await this.repository.findIndex(x => x.id === id);
      if (index == null)
        return '';
      
      let entity = await this.repository.find(x => x.id === id);
      if (entity != null) {
        await this.delete(entity.id);
        const id  = entity.id;
        entity = newEntity;
        entity.id = id;
        this.repository.push(entity);
        return 'Successfully updated!';
      } else {
        return 'Entity is not found!'
      }
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

      return '';
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