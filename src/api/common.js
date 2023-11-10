export const BASE_URL = "https://jsonplaceholder.typicode.com";

const prepareResponse = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

const get = (endpoint) => {
  return fetch(`${BASE_URL}/${endpoint}`)
    .then(prepareResponse)
    .then((response) => response.json());
};

export const client = {
  get,
};
