import { useNavigate } from "react-router-dom";
import { Character } from "../types/types";

type THeroCardProps = {
  heroesData: Character[] | undefined;
};

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const HeroCard: React.FC<THeroCardProps> = ({ heroesData }) => {
  const navigate = useNavigate();
  return (
    <div className="grid gap-10 mt-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:mx-auto lg:w-[80%]">
      {heroesData?.map((hero) => (
        <article
          key={hero.id}
          className="flex flex-col w-[90%] mx-auto lg:w-auto items-center justify-center gap-6 px-16 text-center border-2 rounded-lg bg-marvelRed py-4"
        >
          <h2 className="text-3xl text-white text-shadow-black-outline ">
            {hero.name}
          </h2>

          <img
            src={
              hero.thumbnail.path.includes("not_available")
                ? "./not-image-hero.jpg"
                : `${hero.thumbnail.path}.${hero.thumbnail.extension}`
            }
            alt={`${hero.name} image`}
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
      ))}
    </div>
  );
};

export default HeroCard;
