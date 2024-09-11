import { useNavigate } from "react-router-dom";

type THeroButtonProps = {
  heroId: number;
};

const HeroButton: React.FC<THeroButtonProps> = ({ heroId }) => {
  const navigate = useNavigate();
  return (
    <button
      className="px-10 py-1 text-xs font-bold tracking-wide text-white duration-500 border-2 border-white rounded-lg font-marvel bg-marvelRed lg:border-black lg:hover:border-white"
      onClick={() => navigate(`/characters/${heroId}`)}
    >
      MORE
    </button>
  );
};

export default HeroButton;
