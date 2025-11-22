import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-white mb-12">
      <img
        src={"/images/profile.jpg"}
        alt="profile"
        className="size-40 rounded-full object-cover border-4 border-blue-500"
      />
      <div>
        <h2 className="text-2xl font-bold text-black mb-2">👋 About Me</h2>
        <p className="text-sm font-light text-black mb-4">
          I'm Colbalt9 a self taught engineer and educator passionate about
          building friendly digital experiences and helping others grow into
          confident modern developers.
        </p>
        <Link to={"/about"} className="bg-stone-700 px-3 py-2 rounded-sm">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
