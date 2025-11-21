import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | about" },
    { name: "description", content: "Custom website development." },
  ];
}

const AboutPage = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-white  mb-8 text-center">
        Hey! I'm Colbalt9.
      </h2>
    </>
  );
};

export default AboutPage;
