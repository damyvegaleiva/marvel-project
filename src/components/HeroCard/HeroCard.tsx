import { Character } from "../../types/types";
import HeroName from "./HeroTitle";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroButton from "./HeroButton";

type THeroCardType = {
  hero: Character;
};

const HeroCard: React.FC<THeroCardType> = ({ hero }) => {
  return (
    <article className="flex flex-col w-[90%] mx-auto lg:w-auto items-center justify-center gap-6 px-16 text-center border-4 rounded-lg bg-[url('/card-bg.jpg')] bg-cover bg-center py-4 border-black">
      <HeroName heroName={hero.name} />

      <HeroImage
        heroName={hero.name}
        thumbnailUrl={hero.thumbnail.path}
        thumbnailExt={hero.thumbnail.extension}
      />

      <HeroText heroDescription={hero.description} />

      <HeroButton heroId={hero.id} />
    </article>
  );
};

export default HeroCard;
