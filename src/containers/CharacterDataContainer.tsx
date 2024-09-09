import { CHARACTERS_ALL_URL } from "../config/config";
import useFetch from "../hooks/useFetch";
import { Character } from "../types/types";

const CharacterDataContainer = () => {
  const { data, isLoading } = useFetch<Character>(CHARACTERS_ALL_URL);
  const charactersData = data?.data.results;

  if (isLoading)
    return <h2 className="text-4xl text-center text-white">LOADING...</h2>;

  return (
    <div className="h-full">
      <h1 className="text-4xl text-center text-white">CHARACTERS</h1>
      {charactersData?.map((char) => (
        <article
          key={char.id}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-white">{char.name}</h2>
          <img
            src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
            alt="Character image."
            className="w-[200px] h-[200px] border-2 rounded-[50%]"
          />
          <p>{char.description}</p>
        </article>
      ))}
    </div>
  );
};

export default CharacterDataContainer;
