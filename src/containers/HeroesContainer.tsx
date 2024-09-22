import { motion } from "framer-motion";
import { HEROES_ALL_URL } from "../config/config";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import SectionTitle from "../components/SectionTitle";
import HeroesCardsContainer from "./HeroesCardsContainer";
import { useState } from "react";
import { Character, MarvelApiResponse } from "../types/types";

const HeroesContainer = () => {
  const [offsetValue, setOffsetValue] = useState<number>(0);
  const { data, isLoading } = useFetch<MarvelApiResponse<Character>>(
    HEROES_ALL_URL(offsetValue)
  );

  const heroesData = data?.data.results ?? [];

  const handleClick = (action: string) => {
    if (action === "more") return setOffsetValue((prev) => prev + 20);

    return setOffsetValue((prev) => prev - 20);
  };

  return (
    <motion.main className="mb-20">
      <SectionTitle title="Heroes" />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <HeroesCardsContainer
            heroesData={heroesData}
            offsetValue={offsetValue}
            handleClick={handleClick}
          />
        </>
      )}
    </motion.main>
  );
};

export default HeroesContainer;
