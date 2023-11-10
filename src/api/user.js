import { client } from "./common";

const getAll = () => client.get("users");
const get = (id) => client.get(`users/${id}`);

export const user = {
  getAll,
  get,
};
