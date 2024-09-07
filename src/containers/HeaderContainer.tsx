import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const HeaderContainer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="pt-5 bg-[url('/header-bg.webp')] bg-cover bg-center">
      <img
        src="/marvel-logo.jpg"
        alt="Marvel Logo"
        className="w-[800px] m-auto shadow-boxHeader hover:cursor-pointer border-2 border-black"
        onClick={() => navigate("/")}
      />

      <NavBar />
    </header>
  );
};

export default HeaderContainer;
