import { Link } from "react-router";

type HeroProps = {
  heading: string;
  subheading: string;
};

const Hero: React.FC<HeroProps> = ({ heading, subheading }) => {
  return (
    <header className="w-full mx-auto text-center py-20 px-4 bg-white text-black-900 transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-4 text-black">{heading}</h2>
      <p className="text-lg text-slate-900 max-w-2xl mx-auto mb-6">
        {subheading}
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to={"/projects"}
          className="bg-zinc-800 text-white px-6 py-2 rounded hover:bg-zinc-900 transition"
        >
          View Projects
        </Link>
        <Link
          to={"/contact"}
          className="bg-zinc-800 text-white px-6 py-2 rounded hover:bg-zinc-900 transition"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Hero;
