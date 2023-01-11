import { Entries } from "../../entities/entries/entries";
import { BaseRepository } from "../base/baseRepository";
import { inMemory_EntryRepository } from './../../database/inMemory_EntryRepository';

export class EntryRepository extends BaseRepository<Entries> {
  
  save = async (entry: Entries): Promise<string> => {
    let error = await this.validateForm(entry);
    if (await error.length > 0)
      return '';
    try {
      await inMemory_EntryRepository.push(entry);
      return entry.id;
    } catch (error) {
      return 'Failed. Error: ' + error.message;
    }
  }
  validateForm = async (entry: Entries): Promise<Array<string>> => {
    let erros = new Array<string>();

    if(entry.value > 0)
      erros.push('Valor do lançamento não pode ser menor que zero!');
    if(entry.paymentMethod == null)
      erros.push('Informar uma forma de pagamento!')
    if(entry.BankId.length == null)
      erros.push('Informar um Banco!')

    return erros.length > 0 ? erros : [''];
  }
}