export const pagePaths = {
  home: '/',
  testpage1: 'testpage1',
  testpage2: 'testpage2',
  testpage3: 'testpage3',
  testpage4: 'testpage4',
};

const apiHost = process.env.REACT_APP_API_NODE;

export const apiPaths = {
  login: `${apiHost}/auth/signin`,
  read: `${apiHost}/account/read`,
};
