import React from "react";
import { Outlet } from "react-router-dom";
import StyledNavLink from "./StyledNavLink";

export default function Layout() {
  return (
    <div className="w-10/12 md:w-9/12 pt-6 md:pt-12 mx-auto min-h-screen">
      <header className="flex justify-end gap-8 w-11/12 mx-auto">
        <StyledNavLink to="/albums" end={true}>
          Albums
        </StyledNavLink>
        <StyledNavLink to="/users" end={true}>
          Users
        </StyledNavLink>
      </header>
      <main className="w-11/12 mx-auto mt-10">
        <Outlet />
      </main>
      <footer className="border-t border-black mt-10 py-6 sticky top-full">
        <div className="flex justify-between w-11/12 mx-auto text-slate-500">
          <div>Created by: Motuz Maryia</div>
          <div>BSU: 2023</div>
        </div>
      </footer>
    </div>
  );
}
