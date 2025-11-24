import HashLoader from "react-spinners/HashLoader";

const GlobalSpinner = () => {
  const override = {
    display: "block",
    // margin: "0 auto",
  };
  return (
    <div className="size-30 bg-white rounded-full absolute inset-0 m-auto text-center flex flex-col justify-center items-center shadow-xl shadow-stone-600">
      <HashLoader
        color="#000000"
        size={50}
        loading={true}
        speedMultiplier={1}
        cssOverride={override}
      />
      <p className="text-black text-sm font-bold mt-4">Loading...</p>
    </div>
  );
};

export default GlobalSpinner;
