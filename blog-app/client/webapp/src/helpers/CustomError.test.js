import { CustomError } from './CustomError';

describe('Helpers', () => {
  const mock = {
    arrMessage: [
      {
        extensions: {
          exception: {
            validationErrors: 'Message Error'
          }
        }
      }
    ]
  };
  it('Should return', () => {
    const messageError = CustomError(mock.arrMessage);
    expect(messageError).toEqual('Message Error');
  });
});
