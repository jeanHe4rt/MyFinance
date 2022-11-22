import { Entries } from "../../entities/entries/entries";
import { BaseRepository } from "../base/baseRepository";
import { inMemory_EntryRepository } from './../../database/inMemory_EntryRepository';

export class EntryRepository extends BaseRepository<Entries> {
  
  override save = async (entry: Entries): Promise<string> => {
    
    try {
      await inMemory_EntryRepository.push(entry);

      return entry.id;
    } catch (error) {
      return 'Failed. Error: ' + error.message;
    }
}
}