import React from "react";
import { useLoaderData } from "react-router-dom";
import { api } from "../../api";
import PageTitle from "../../components/common/PageTitle";
import Stack from "../../components/common/Stack";
import { capitalize } from "../../utils/capitalize";
import StyledLink from "../../components/common/StyledLink";
import Icon from "../../components/icons/Icon";

export const loader = async () => {
  const albums = await api.album.getAll();
  return { albums };
};

export default function Albums() {
  const { albums } = useLoaderData();

  return (
    <div>
      <PageTitle>Albums</PageTitle>
      <Stack>
        {albums.map((album) => (
          <StyledLink
            key={album.id}
            to={`/albums/${album.id}`}
            className="flex items-center gap-1"
          >
            <Icon type="album" />
            {capitalize(album.title)}
          </StyledLink>
        ))}
      </Stack>
    </div>
  );
}
