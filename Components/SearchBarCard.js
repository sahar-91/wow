"use client";
import { useLanguage } from "../app/context/LanguageContext";

export default function SearchBar({ query, setQuery }) {
  const { language } = useLanguage();
  const t = {
    EN: {
      placeholder: "Search for a movie(name or description)",
    },
    AR: {
      placeholder: "ابحث عن فيلم (الاسم أو الوصف)",
    },
  };
  return (
    <div className="py-6">
      <input
        type="text"
        placeholder={t[language].placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded-md bg-black text-white border-white border-1"/>
    </div>
  );
}