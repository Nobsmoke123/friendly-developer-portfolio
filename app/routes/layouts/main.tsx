import { Outlet } from "react-router";
import type { Route } from "./+types/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "Custom website development." },
  ];
}

const MainLayout = () => {
  return (
    <>
      <section className="w-full mx-auto px-4">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
