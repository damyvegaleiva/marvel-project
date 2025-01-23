import { useNavigate } from "react-router-dom";
import { Character, MarvelApiResponse } from "../types/types";

type TSearchResultsProps = {
  isLoading: boolean;
  charactersData: Character[];
  setInputSearch: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<
    React.SetStateAction<MarvelApiResponse<Character> | null>
  >;
};

const SearchResults: React.FC<TSearchResultsProps> = ({
  isLoading,
  charactersData,
  setData,
  setInputSearch,
}) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    setData(null);
    navigate(`/character/${id}`);
    setInputSearch("");
  };

  return (
    <>
      {isLoading && <p className="text-white">Loading...</p>}

      <section className="p-2 mt-2 bg-white bg-opacity-50 rounded-md h-[150px] overflow-y-auto">
        {charactersData.map((character) => (
          <article
            key={character.id}
            className="flex flex-row items-center w-full gap-4 hover:cursor-pointer"
            onClick={() => handleClick(character.id)}
          >
            <img
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt={character.name}
              className="rounded-full w-[45px]"
            />
            <h2 className="text-xl text-white">{character.name}</h2>
          </article>
        ))}
      </section>
    </>
  );
};

export default SearchResults;
