import { useEffect, useState } from "react";

interface Props {
  inputPlaceholder: string;
  buttonText: string;
  onQuery: (query: string) => void;
}

export const CustomSearchBar = ({
  inputPlaceholder = "Buscar",
  buttonText,
  onQuery,
}: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onQuery, query]);

  const handleSearch = () => {
    onQuery(query);
    //setQuery("");
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={inputPlaceholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button>{buttonText}</button>
    </div>
  );
};
