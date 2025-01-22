import { useState } from "react";
import { BASE_URL, CHARACTER_SEARCH_URL } from "../../config/config";
import { useNavigate } from "react-router-dom";
import { Character, MarvelApiResponse } from "../../types/types";

const Search = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [data, setData] = useState<MarvelApiResponse<Character> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
    setInputSearch("");
  };

  const handleClick = (id: number) => {
    setData(null);
    navigate(`/character/${id}`);
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

        {isLoading && <p className="text-white">Loading...</p>}

        {data && (
          <div className="p-2 mt-2 bg-white bg-opacity-50 rounded-md h-[150px] overflow-y-auto">
            {charactersData.map((character) => (
              <div
                key={character.id}
                className="flex flex-row items-center w-full gap-4 hover:cursor-pointer"
                onClick={() => handleClick(character.id)}
              >
                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt={character.name}
                  className="rounded-full w-[45px]"
                />
                <h2 className="text-xl text-white">{character.name}</h2>
              </div>
            ))}
          </div>
        )}
      </form>
    </search>
  );
};

export default Search;
