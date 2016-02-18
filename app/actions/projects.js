export const ADD_PROJECT = 'ADD_PROJECT';

export function addProject(host, token, name = '') {
  return {
    type: ADD_PROJECT,
    host,
    token,
    name
  };
}
