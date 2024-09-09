import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import NavList from "./NavList";
import BurgerButton from "./BurgerButton";

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
      className={`relative flex transition-all duration-1000 flex-col items-center justify-center w-full border-2 border-black lg:border-0 lg:border-t-2 ${
        isOpen ? "bg-marvelRed" : "bg-white"
      }`}
      aria-label="Main Navigation"
    >
      <BurgerButton handleClick={handleClick} isOpen={isOpen} />
      <NavList isOpen={isOpen} />
    </nav>
  );
};

export default NavBar;
