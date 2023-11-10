import React from "react";
import { useLoaderData } from "react-router-dom";
import { api } from "../../api";
import Stack from "../../components/common/Stack";
import PageTitle from "../../components/common/PageTitle";
import StyledLink from "../../components/common/StyledLink";
import Icon from "../../components/icons/Icon";

export const loader = async () => {
  const users = await api.user.getAll();
  return { users };
};

export default function Users() {
  const { users } = useLoaderData();

  return (
    <div>
      <PageTitle>Users</PageTitle>
      <Stack>
        {users.map((user) => (
          <div key={user.id} className="text-lg">
            <StyledLink
              to={`/users/${user.id}`}
              className="flex gap-1 items-center"
            >
              <Icon type="user" />
              {user.name}
            </StyledLink>
          </div>
        ))}
      </Stack>
    </div>
  );
}
