import { client } from "./common";

const getByAlbumId = (albumId) => client.get(`photos?albumId=${albumId}`);

export const photo = {
  getByAlbumId,
};
