import { validEmail } from '../../core/infra/validations/email';

test('check if the email is valid', () => {
  expect(validEmail('gustavosilva@hotmail.com')).toBe(true);
});

test('check if the email is not valid', () => {
  expect(validEmail('gustavo@hotmail.')).toBe(false);
});
