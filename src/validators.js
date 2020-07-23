import {number as createNumberValidator, required as createRequiredValidator, regex} from 'react-admin'

export const required = createRequiredValidator('errors.common.required')
export const number = createNumberValidator('errors.common.number')
export const userName = regex(/^[0-9a-zA-Z]{4,20}$/, 'errors.auth.notValidUserName')
export const password = regex(/^[0-9a-zA-Z!@#$%^&*()?+-_~=\\/]{6,40}$/, 'errors.auth.notValidPassword')
