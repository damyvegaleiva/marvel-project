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
  return (
    <Tilt className="flex">
      <article className="flex flex-col items-center justify-center w-[90%] mx-auto gap-6  text-center border-4 rounded-lg bg-[url('/card-bg.jpg')] bg-cover bg-center py-4 border-black lg:w-full">
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
