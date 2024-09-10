import HeroCard from "../components/HeroCard";
import Loader from "../components/Loader";
import { HEROES_ALL_URL } from "../config/config";
import useFetch from "../hooks/useFetch";
import { Character } from "../types/types";

const HeroesCardContainer = () => {
  const { data, isLoading } = useFetch<Character>(HEROES_ALL_URL);
  const heroesData = data?.data.results;

  return (
    <section className="h-full">
      <h1 className="w-full py-2 mt-10 text-3xl text-center text-white lg:text-5xl text-shadow-black-outline bg-marvelRed">
        HEROES
      </h1>

      {isLoading ? <Loader /> : <HeroCard heroesData={heroesData} />}
    </section>
  );
};

export default HeroesCardContainer;
