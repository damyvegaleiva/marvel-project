import { CHARACTER_DETAIL_URL } from "../config/config";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Character, MarvelApiResponse } from "../types/types";

const CharacterDetailContainer = () => {
  const { id } = useParams();
  const { data } = useFetch<MarvelApiResponse<Character>>(
    CHARACTER_DETAIL_URL(id)
  );

  const character = data?.data.results[0];

  if (!character) {
    return <p>Loading character details...</p>;
  }

  return (
    <article>
      <h1 className="text-[4rem] block text-transparent bg-contain font-bangers lg:text-[7rem] px-5 bg-clip-text text-stroke-black-extra-thin bg-[url('/comic-bg.jpg')] text-center">
        {character.name}
      </h1>

      <div className="flex flex-row justify-center gap-10">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension} `}
          alt=""
          className="object-cover rounded-2xl w-[250px] h-[375px]"
        />

        <div>
          <p className="text-white">{character.description}</p>

          <h2 className="text-2xl text-blue-200">Comics</h2>
          <ul>
            {character.comics.items.map((comic) => (
              <li key={comic.resourceURI}>{comic.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default CharacterDetailContainer;
