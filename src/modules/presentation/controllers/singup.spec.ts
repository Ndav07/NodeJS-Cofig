import { SignUpController } from "@modules/presentation/controllers/singup";

describe('SignUp Controller', () => {
  it('should return 400 if no name is provide', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  })
})