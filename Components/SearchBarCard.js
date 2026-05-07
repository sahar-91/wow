"use client";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="py-6">
      <input
        type="text"
        placeholder="Search for a movie(name or description)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded-md bg-black text-white border-white border-1"/>
    </div>
  );
}