import {test, expect} from 'vitest';
import { NewObjectID } from '../../../test/utils/utils';
import { EntryType } from '../../entities/base/enums/entryType.enum';
import { Entries } from '../../entities/entries/entries';
import { PaymentMethod } from '../../entities/paymentMethod/paymentMethod';
import { EntryRepository } from './entryRepository';

test('Create a new Entry by EntryRepository', async () => {
  const entryRepository = new EntryRepository();

  const entry = new Entries();
  const payment = new PaymentMethod();
  payment.name = 'PIX';
  entry.id = NewObjectID();
  entry.lastUpdate = new Date();
  entry.code = '1';
  entry.name = 'Conta de Luz';
  entry.description = 'Lançamento referente a conta da luz';
  entry.createAt = new Date();
  entry.paymentMethod = payment;
  entry.isPaid = false;
  entry.value = 100;
  entry.valuePaid = 0;
  entry.type = EntryType.expense;

  const entryID = await entryRepository.save(entry);

  expect(entryID.length).gt(0);
});

test('Update Entry by EntryRepository', async () => {
  const entryRepository = new EntryRepository();

  const entry = new Entries();
  const payment = new PaymentMethod();
  payment.name = 'PIX';
  entry.id = NewObjectID();
  entry.lastUpdate = new Date();
  entry.code = '1';
  entry.name = 'Conta de Luz';
  entry.description = 'Lançamento referente a conta da luz';
  entry.createAt = new Date();
  entry.paymentMethod = payment;
  entry.isPaid = false;
  entry.value = 100;
  entry.valuePaid = 0;
  entry.type = EntryType.expense;

  const entryID = await entryRepository.save(entry);

  expect(entryID.length).gt(0);
});