import { useNavigate } from "react-router-dom";
import { Character } from "../types/types";

type THeroCardType = {
  hero: Character;
};

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const HeroCard: React.FC<THeroCardType> = ({ hero }) => {
  const navigate = useNavigate();

  console.log(hero);

  return (
    <article className="flex flex-col w-[90%] mx-auto lg:w-auto items-center justify-center gap-6 px-16 text-center border-4 rounded-lg bg-[url('./card-bg.jpg')] bg-cover bg-center py-4 border-black">
      <h2 className="text-3xl text-white text-shadow-black-outline ">
        {hero?.name}
      </h2>

      <img
        src={
          hero?.thumbnail.path.includes("not_available")
            ? "./not-image-hero.jpg"
            : `${hero?.thumbnail.path}.${hero?.thumbnail.extension}`
        }
        alt={`${hero?.name} image`}
        className="w-[150px] h-[150px] border-2 rounded-[60%]"
      />

      <p className="flex-grow text-lg text-white">
        {truncateText(
          hero?.description || "This hero doesn't like descriptions.",
          50
        )}
      </p>

      <button
        className="px-10 py-1 text-white border-2"
        onClick={() => navigate(`/characters/${hero.id}`)}
      >
        MORE
      </button>
    </article>
  );
};

export default HeroCard;
