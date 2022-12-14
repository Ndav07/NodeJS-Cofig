import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../erros/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { EmailValidor } from '../protocols/email-validor'
import { InvalidParamError } from '../erros/invalid-param-error'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidor
  constructor(emailValidator: EmailValidor) {
    this.emailValidator = emailValidator
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValid) {
      return badRequest(new InvalidParamError('email'))
    }

    return {
      statusCode: 400,
      body: {
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password',
      },
    }
  }
}
