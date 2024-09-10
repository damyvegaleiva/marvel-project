import { useNavigate } from "react-router-dom";

type THeroButtonProps = {
  heroId: number;
};

const HeroButton: React.FC<THeroButtonProps> = ({ heroId }) => {
  const navigate = useNavigate();
  return (
    <button
      className="px-10 py-1 text-white border-2"
      onClick={() => navigate(`/characters/${heroId}`)}
    >
      MORE
    </button>
  );
};

export default HeroButton;
