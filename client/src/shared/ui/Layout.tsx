import { createRef } from "react";
import { Outlet } from "react-router-dom";

export const layoutContentElRef = createRef<HTMLDivElement>();
export const Layout = () => {
  return (
    <div ref={layoutContentElRef}>
      <Outlet />
    </div>
  );
};
