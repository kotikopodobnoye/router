import React from "react";

export default function Stack({ children }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
