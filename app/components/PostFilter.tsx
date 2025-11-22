const PostFilter: React.FC<{
  searchQuery: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchQuery}
        placeholder="Search posts..."
        className="w-full px-4 py-2 rounded-lg bg-zinc-900 text-white"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default PostFilter;
