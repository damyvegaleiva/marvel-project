import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const buttonVariants = {
  initial: { y: 0 },
  hovered: { y: "-150%" },
};

const shadowVariants = {
  initial: { y: "150%" },
  hovered: { y: 0 },
};

type TNavItemProps = {
  name: string;
  path: string;
};

const NavItem: React.FC<TNavItemProps> = ({ name, path }) => {
  const { pathname: currentPath } = useLocation();

  return (
    <li className="w-full lg:w-[150px] text-center font-bold">
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative overflow-hidden text-center lg:border-black lg:border-2 lg:rounded-md lg:hover:cursor-pointer bg-marvelRed"
      >
        <NavLink
          to={path}
          aria-current={currentPath === path ? "page" : undefined}
        >
          <motion.button
            variants={buttonVariants}
            transition={{ bounce: false }}
            className="lg:bg-[url('/button-bg.webp')] bg-center bg-cover w-full py-2 text-white lg:text-black lg:text-shadow-white-outline text-shadow-black-outline"
          >
            {name.toUpperCase()}
          </motion.button>

          <motion.button
            className="absolute inset-0 text-white"
            variants={shadowVariants}
          >
            {name.toUpperCase()}
          </motion.button>
        </NavLink>
      </motion.div>
    </li>
  );
};

export default NavItem;
