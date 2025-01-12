import { Character } from "../types/types";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import PaginationButton from "../components/PaginationButton";

type TCharactersCardsContainerProps = {
  charactersData: Character[] | undefined;
  offsetValue: number;
  handleClick: (action: string) => void;
};

const CharactersCardsContainer: React.FC<TCharactersCardsContainerProps> = ({
  charactersData,
  offsetValue,
  handleClick,
}) => {
  return (
    <section>
      <div className="grid gap-10 mt-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:mx-auto lg:w-[60%]">
        {charactersData?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <PaginationButton offsetValue={offsetValue} handleClick={handleClick} />
    </section>
  );
};

export default CharactersCardsContainer;
