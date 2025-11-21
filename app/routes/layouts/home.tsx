import { Outlet } from "react-router";
import Hero from "~/components/Hero";
import type { Route } from "./+types/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "Custom website development." },
  ];
}

const homeLayout = () => {
  return (
    <>
      <Hero
        heading="Hey, I'm Colbalt9 👋"
        subheading="I build friendly web experiences and help others become confident modern
        developers"
      />
      <section className="w-full mx-auto">
        <Outlet />
      </section>
    </>
  );
};

export default homeLayout;
