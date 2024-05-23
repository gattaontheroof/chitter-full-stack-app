import { check } from 'express-validator';

export const registrationValidation = [
    check('name').exists().isString(),
    check('username').exists().isString(),
    check('email').exists().isEmail(),
    check('password').exists().isString()
];