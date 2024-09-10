import { motion } from "framer-motion";
import { Character } from "../types/types";
import { HEROES_ALL_URL } from "../config/config";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import SectionTitle from "../components/SectionTitle";
import HeroesCardsContainer from "./HeroesCardsContainer";

const HeroesContainer = () => {
  const { data, isLoading } = useFetch<Character>(HEROES_ALL_URL);
  const heroesData = data?.data.results;

  if (isLoading) return <Loader />;

  return (
    <motion.main
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle title="Heroes" />

      <HeroesCardsContainer heroesData={heroesData} />
    </motion.main>
  );
};

export default HeroesContainer;
