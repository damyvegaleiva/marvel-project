import { CHARACTER_COMICS_URL, CHARACTER_DETAIL_URL } from "../config/config";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Character, Comic, MarvelApiResponse } from "../types/types";

const CharacterDetailContainer = () => {
  const { id } = useParams();
  const { data: characterData } = useFetch<MarvelApiResponse<Character>>(
    CHARACTER_DETAIL_URL(id)
  );

  const { data: characterComics } = useFetch<MarvelApiResponse<Comic>>(
    CHARACTER_COMICS_URL(id)
  );

  const character = characterData?.data.results[0];
  const comics = characterComics?.data.results;

  if (!character) {
    return <p>Loading character details...</p>;
  }

  console.log(comics);

  return (
    <article className="mb-20">
      <div className="flex flex-row items-center justify-center gap-10">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension} `}
          alt=""
          className="object-cover rounded-2xl w-[250px] h-[375px] drop-shadow-2xl"
        />

        <div className="flex flex-col gap-5">
          <h1 className="text-[4rem] block text-transparent bg-contain font-bangers lg:text-[7rem] px-5 bg-clip-text text-stroke-black-extra-thin bg-[url('/comic-bg.jpg')] text-center">
            {character.name}
          </h1>

          <p className="text-lg text-white">{character.description}</p>

          <h2 className="text-2xl text-blue-200 underline">Latest comics</h2>

          <ul className="flex items-center gap-5">
            {comics?.map((comic) => (
              <li
                key={comic.id}
                className="flex flex-col w-[150px] gap-5 justify-center items-center"
              >
                <p className="text-base text-center text-white">
                  {comic.title}
                </p>
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                  className="border-[1px] border-black rounded-r-xl"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default CharacterDetailContainer;
