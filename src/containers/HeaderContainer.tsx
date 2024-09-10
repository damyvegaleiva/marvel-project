import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const HeaderContainer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-[url('/header-bg.webp')] bg-cover bg-center pt-5 z-20 relative">
      <img
        src="/marvel-logo.jpg"
        alt="Marvel Logo"
        className="w-[300px] md:w-[500px] lg:w-[550px] m-auto shadow-boxHeader hover:cursor-pointer border-2 border-black mb-5"
        onClick={() => navigate("/")}
      />

      <NavBar />
    </header>
  );
};

export default HeaderContainer;
