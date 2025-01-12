import useFetch from "../hooks/useFetch";
import { CHARACTERS_ALL_URL } from "../config/config";
import { Character, MarvelApiResponse } from "../types/types";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import Loader from "../components/Loader";
import CharactersCardsContainer from "./CharactersCardsContainer";

const CharactersContainer = () => {
  const [offsetValue, setOffsetValue] = useState<number>(0);
  const { data, isLoading } = useFetch<MarvelApiResponse<Character>>(
    CHARACTERS_ALL_URL(offsetValue)
  );

  const charactersData = data?.data.results ?? [];

  const handleClick = (action: string) => {
    if (action === "more") return setOffsetValue((prev) => prev + 20);

    return setOffsetValue((prev) => prev - 20);
  };

  return (
    <motion.main className="mb-20">
      <SectionTitle title="Characters" />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CharactersCardsContainer
            charactersData={charactersData}
            offsetValue={offsetValue}
            handleClick={handleClick}
          />
        </>
      )}
    </motion.main>
  );
};

export default CharactersContainer;
