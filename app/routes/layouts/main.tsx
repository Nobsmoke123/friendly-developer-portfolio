import { Outlet, useNavigation } from "react-router";
import type { Route } from "./+types/main";
import GlobalSpinner from "~/components/GlobalSpinner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "Custom website development." },
  ];
}

const MainLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      <section className="w-full mx-auto px-4">
        {isNavigating && <GlobalSpinner />}
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
