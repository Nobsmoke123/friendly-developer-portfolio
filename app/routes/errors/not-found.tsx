import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-2 min-h-[70vh] bg-white">
      <h1 className="text-6xl font-extrabold text-black mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-black mb-2">
        Page not found.
      </h2>
      <p className="text-black text-sm mb-4">
        {" "}
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to={"/"}
        className="inline-block bg-zinc-900 text-white text-sm font-bold px-6 py-3 rounded-sm"
      >
        {" "}
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
