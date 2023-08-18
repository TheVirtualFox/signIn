import { loginErrorMock, loginSuccessMock } from '../mocks';

export const fetcher = async (error = loginErrorMock, response = loginSuccessMock, ms = 2500, rate = 0.5) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > rate ? resolve(response) : reject(error);
    }, ms);
  });
};
