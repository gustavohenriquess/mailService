const emailValidator = require('../../ts/validations/email');


//Email
test('check e-mail is valid', () => {
  expect(emailValidator("gustavosilva@hotmail.com")).toBe(true)
});

test('check e-mail is not valid', () => {
  expect(emailValidator("gustavo@hotmail.")).toBe(false)
});
