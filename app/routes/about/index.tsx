import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | about" },
    { name: "description", content: "Custom website development." },
  ];
}

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-white">
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src={"/images/profile.jpg"}
          alt="profile"
          className="size-40 rounded-full object-cover border-4 border-blue-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-black mb-4">
            Hey! I'm Colbalt9 👋
          </h1>
          <p className="text-black text-lg">
            I am a passionate web developer and content creator who loves
            building friendly digital experiences and helping others grow into
            confident, modern developers.
          </p>
        </div>
      </div>

      {/* Bio section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-black mb-4">My Mission</h2>
        <p className="text-black text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          voluptatem nihil illum adipisci veritatis dignissimos saepe quod
          repudiandae eum magnam molestias, magni excepturi sunt omnis
          laudantium facilis exercitationem minima culpa?
        </p>
      </div>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-black mb-4">🚀 Tech Stacks</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-black">
        {[
          "React",
          "Next.js",
          "React Router v7",
          "Tailwind CSS",
          "Node.js",
          "Laravel",
          "Prisma",
          "MongoDB",
          "PostgreSQL",
          "Appwrite",
          "Docker",
          "Go",
          "Flutter",
          "Python",
          "Kotlin",
        ].map((skill) => (
          <li
            key={skill}
            className="bg-stone-700 px-3 py-1 rounded-sm text-white font-bold text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
