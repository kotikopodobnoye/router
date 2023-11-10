import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { api } from "../../api";
import { capitalize } from "../../utils/capitalize";
import PageTitle from "../../components/common/PageTitle";
import StyledLink from "../../components/common/StyledLink";

export const loader = async ({ params: { id } }) => {
  const album = await api.album.get(id);

  const user = await api.user.get(album.userId);

  const photosPromise = api.photo.getByAlbumId(album.id);

  return { album, photosPromise, user };
};

export default function Album() {
  const { album, photosPromise, user } = useLoaderData();

  return (
    <div>
      <Suspense fallback={<div>Loading photos...</div>}>
        <PageTitle>{capitalize(album.title)}</PageTitle>
        <div className="text-slate-400 ">
          Created by:{" "}
          <StyledLink to={`/users/${user.id}`}>{user.name}</StyledLink>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5">
          <Await
            resolve={photosPromise}
            errorElement={<div>Something went wrong with loading photos</div>}
          >
            {(photos) =>
              photos.map((photo) => (
                <img src={photo.url} key={photo.id} alt="" />
              ))
            }
          </Await>
        </div>
      </Suspense>
    </div>
  );
}
