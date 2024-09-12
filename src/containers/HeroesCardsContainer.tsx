import { Character } from "../types/types";
import HeroCard from "../components/HeroCard/HeroCard";
import PaginationButton from "../components/PaginationButton";

type THeroesCardsContainerProps = {
  heroesData: Character[] | undefined;
  offsetValue: number;
  handleClick: (action: string) => void;
};

const HeroesCardsContainer: React.FC<THeroesCardsContainerProps> = ({
  heroesData,
  offsetValue,
  handleClick,
}) => {
  return (
    <section>
      <div className="grid gap-10 mt-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:mx-auto lg:w-[60%]">
        {heroesData?.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>

      <PaginationButton offsetValue={offsetValue} handleClick={handleClick} />
    </section>
  );
};

export default HeroesCardsContainer;
