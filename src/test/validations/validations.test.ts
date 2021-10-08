import moment from 'moment'

const emailValidator = require('../../core/domain/validations/email')
const dateValidator = require('../../core/domain/validations/date')

//Email
test('check if the email is valid', () => {
  expect(emailValidator("gustavosilva@hotmail.com")).toBe(true)
});

test('check if the email is not valid', () => {
  expect(emailValidator("gustavo@hotmail.")).toBe(false)
});

//Date
test('check if the date is valid with new Date()', () => {
  expect(dateValidator(new Date())).toBe(true)
})

test('check if the date is valid with moment()', () => {
  expect(dateValidator(moment())).toBe(true)
})

test('check if the date is valid with moment().format()', () => {
  expect(dateValidator(moment().format())).toBe(true)
})

test("check if the date is valid with moment().format('YYYY-MM-DD')", () => {
  expect(dateValidator(moment().format('YYYY-MM-DD'))).toBe(true)
})

test("check if the date is not valid with moment('2020-02-31')", () => {
  expect(dateValidator(moment('2020-02-31'))).toBe(false)
})

test("check if the date is not valid with new Date('2020-15-31')", () => {
  expect(dateValidator(new Date('2020-15-31'))).toBe(false)
})

