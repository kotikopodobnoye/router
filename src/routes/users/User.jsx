import React from "react";
import { useLoaderData } from "react-router-dom";
import { api } from "../../api";
import UserCard from "../../components/user/UserCard";
import PageTitle from "../../components/common/PageTitle";
import { capitalize } from "../../utils/capitalize";
import StyledLink from "../../components/common/StyledLink";
import Icon from "../../components/icons/Icon";
import Stack from "../../components/common/Stack";

export const loader = async ({ params: { id } }) => {
  const user = await api.user.get(id);

  const albumList = await api.album.getByUserId(id);

  return { user, albumList };
};

export default function User() {
  const { user, albumList } = useLoaderData();
  return (
    <div>
      <UserCard {...user} />

      <PageTitle>Albums</PageTitle>
      <Stack>
        {albumList.map((album) => (
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
