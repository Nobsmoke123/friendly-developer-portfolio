import { Outlet, useNavigation } from "react-router";
import Hero from "~/components/Hero";
import type { Route } from "./+types/main";
import GlobalSpinner from "~/components/GlobalSpinner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "Custom website development." },
  ];
}

const homeLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      <Hero
        heading="Hey, I'm Colbalt9 👋"
        subheading="I build friendly web experiences and help others become confident modern
        developers"
      />
      <section className="w-full mx-auto px-8 py-4">
        {isNavigating && <GlobalSpinner />}
        <Outlet />
      </section>
    </>
  );
};

export default homeLayout;
