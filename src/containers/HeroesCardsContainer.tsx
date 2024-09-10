import { Character } from "../types/types";
import HeroCard from "../components/HeroCard/HeroCard";

type THeroesCardsContainerProps = {
  heroesData: Character[] | undefined;
};

const HeroesCardsContainer: React.FC<THeroesCardsContainerProps> = ({
  heroesData,
}) => {
  return (
    <section className="grid gap-10 mt-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:mx-auto lg:w-[80%]">
      {heroesData?.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </section>
  );
};

export default HeroesCardsContainer;
