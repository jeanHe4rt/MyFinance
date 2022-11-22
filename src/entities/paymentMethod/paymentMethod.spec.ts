import { expect, test } from 'vitest';
import { PaymentMethod } from './paymentMethod';

test('Create PaymentMethod ', () => {
  const paymentMethod = new PaymentMethod();
  
  paymentMethod.name  = 'PIX';

  expect(paymentMethod).toBeInstanceOf(PaymentMethod);
  expect(paymentMethod.name).toBe('PIX');
});