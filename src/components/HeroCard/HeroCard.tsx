import { useState, useEffect } from "react";
import { Character } from "../../types/types";
import HeroName from "./HeroTitle";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroButton from "./HeroButton";
import Tilt from "react-parallax-tilt";

type THeroCardType = {
  hero: Character;
};

const HeroCard: React.FC<THeroCardType> = ({ hero }) => {
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
      tiltEnable={isTiltEnabled} // Control tilt based on screen size
    >
      <article className="flex flex-col items-center justify-center w-[75%] mx-auto gap-6 text-center border-4 rounded-lg bg-[url('/card-bg.jpg')] bg-cover bg-center py-4 border-black lg:w-full">
        <HeroName heroName={hero.name} />
        <HeroImage
          heroName={hero.name}
          thumbnailUrl={hero.thumbnail.path}
          thumbnailExt={hero.thumbnail.extension}
        />
        <HeroText heroDescription={hero.description} />
        <HeroButton heroId={hero.id} />
      </article>
    </Tilt>
  );
};

export default HeroCard;
