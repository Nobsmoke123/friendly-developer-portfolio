export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  return (
    totalPages > 1 && (
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }, (_, value: number) => (
          <button
            key={value + 1}
            onClick={() => setCurrentPage(value + 1)}
            className={`px-3 py-1 cursor-pointer rounded ${currentPage === value + 1 ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"}`}
          >
            {value + 1}
          </button>
        ))}
      </div>
    )
  );
};

export default Pagination;
