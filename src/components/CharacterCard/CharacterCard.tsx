import { useState, useEffect } from "react";
import { Character } from "../../types/types";
import CharacterName from "./CharactersTitle";
import CharacterImage from "./CharacterImage";
import CharacterText from "./CharactersText";
import CharacterButton from "./CharacterButton";
import Tilt from "react-parallax-tilt";

type TCharacterCardType = {
  character: Character;
};

const CharacterCard: React.FC<TCharacterCardType> = ({ character }) => {
  const [isTiltEnabled, setIsTiltEnabled] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    setIsTiltEnabled(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsTiltEnabled(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <Tilt
      className="flex"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      transitionSpeed={3000}
      tiltEnable={isTiltEnabled}
    >
      <article className="flex flex-col items-center justify-center w-[75%] mx-auto gap-6 text-center border-[3.5px] rounded-lg bg-[url('/card-bg.jpg')] bg-cover bg-center py-4 border-black lg:w-full lg:hover:border-white lg:duration-700 lg:border-[2.5px]">
        <CharacterName characterName={character.name} />
        <CharacterImage
          characterName={character.name}
          thumbnailUrl={character.thumbnail.path}
          thumbnailExt={character.thumbnail.extension}
        />
        <CharacterText characterDescription={character.description} />
        <CharacterButton characterId={character.id} />
      </article>
    </Tilt>
  );
};

export default CharacterCard;
