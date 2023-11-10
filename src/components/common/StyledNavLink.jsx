import React from "react";
import { NavLink } from "react-router-dom";
import { classNames } from "../../utils/class-names";

export default function StyledNavLink({ children, className, ...props }) {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          "text-2xl font-semibold",
          isActive ? "text-black pointer-events-none" : "text-slate-400",
          className
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}
