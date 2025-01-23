import { useState } from "react";
import { BASE_URL, CHARACTER_SEARCH_URL } from "../../config/config";
import { Character, MarvelApiResponse } from "../../types/types";
import SearchResults from "../SearchResults";

const SearchBox = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [data, setData] = useState<MarvelApiResponse<Character> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const charactersData = data?.data.results ?? [];

  const fetchCharacter = async () => {
    setIsLoading(true);

    try {
      const request = await fetch(BASE_URL + CHARACTER_SEARCH_URL(inputSearch));
      const data = await request.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setData(null);
    e.preventDefault();
    fetchCharacter();
  };

  return (
    <search
      role="search"
      className="flex items-center justify-center flex-col w-[50%] m-auto mt-5 p-5 relative"
    >
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="site-search" className="mr-2 text-lg text-white">
          Search:
        </label>
        <input
          type="text"
          id="site-search"
          value={inputSearch}
          placeholder="Character, Comic, Creator..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputSearch(e.target.value)
          }
          className="px-2 rounded-sm"
        />
      </form>

      {charactersData && (
        <SearchResults
          setInputSearch={setInputSearch}
          setData={setData}
          isLoading={isLoading}
          charactersData={charactersData}
        />
      )}
    </search>
  );
};

export default SearchBox;
