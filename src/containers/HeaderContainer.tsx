import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const HeaderContainer: React.FC = () => {
  const navigate = useNavigate();
  const { pathname: currentPath } = useLocation();

  return (
    <header
      className={`bg-[url('/header-bg.webp')] bg-cover bg-center pt-5 ${
        currentPath === "/" && "mt-6"
      }`}
    >
      <img
        src="/marvel-logo.jpg"
        alt="Marvel Logo"
        className="w-[800px] m-auto shadow-boxHeader hover:cursor-pointer border-2 border-black mb-5"
        onClick={() => navigate("/")}
      />

      <NavBar />
    </header>
  );
};

export default HeaderContainer;
