import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import BurgerButton from "./BurgerButton";
import NavList from "./NavList";
import SearchBox from "./SearchBox";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`relative flex transition-all duration-1000 flex-col items-center justify-center w-full border-2 border-black lg:border-0 lg:border-y-2 shadow-boxHeader ${
        isOpen ? "bg-marvelRed" : "bg-[#fafafa]"
      }`}
      aria-label="Main Navigation"
    >
      <BurgerButton handleClick={handleClick} isOpen={isOpen} />

      <NavList isOpen={isOpen} />
      <SearchBox />
    </nav>
  );
};

export default NavBar;
