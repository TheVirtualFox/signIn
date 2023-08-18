import { loginErrorMock, loginSuccessMock } from '../mocks';

export const fetcher = async (
  request: unknown,
  error = loginErrorMock,
  response = loginSuccessMock,
  ms = 2500,
  rate = 0.5,
) => {
  console.log(request);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > rate ? resolve(response) : reject(error);
    }, ms);
  });
};
