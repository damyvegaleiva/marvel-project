import { useNavigate } from "react-router-dom";

type TCharacterButtonProps = {
  characterId: number;
};

const CharacterButton: React.FC<TCharacterButtonProps> = ({ characterId }) => {
  const navigate = useNavigate();
  return (
    <button
      className="px-10 py-1 text-xs font-bold tracking-wide text-white duration-500 border-2 border-white rounded-lg font-marvel bg-marvelRed lg:border-black lg:hover:border-white"
      onClick={() => navigate(`/character/${characterId}`)}
    >
      MORE
    </button>
  );
};

export default CharacterButton;
