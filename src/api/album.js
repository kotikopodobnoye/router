import { client } from "./common";

const getAll = () => client.get("albums");

const get = (id) => client.get(`albums/${id}`);

const getByUserId = (userId) => client.get(`albums?userId=${userId}`);

export const album = {
  getAll,
  get,
  getByUserId,
};
