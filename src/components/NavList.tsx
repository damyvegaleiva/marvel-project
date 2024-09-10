import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

type TNavListProps = {
  isOpen: boolean;
};

const listItems = [
  { name: "Heroes", path: "/characters" },
  { name: "Comics", path: "/comics" },
  { name: "Creators", path: "/creators" },
];

const buttonVariants = {
  initial: { y: 0 },
  hovered: { y: "-150%" },
};

const shadowVariants = {
  initial: { y: "150%" },
  hovered: { y: 0 },
};

const NavList: React.FC<TNavListProps> = ({ isOpen }) => {
  const { pathname: currentPath } = useLocation();
  const hideToggleClass = !isOpen && "translate-x-[-200%]";

  return (
    <ul
      className={`flex absolute lg:static top-full flex-col justify-center items-center lg:flex-row lg:py-2 text-[1rem] lg:gap-10 w-full lg:bg-white bg-marvelRed lg:translate-x-0 transition-transform duration-1000 ${hideToggleClass}`}
    >
      {listItems.map((item, index) => (
        <li key={index} className="w-full lg:w-[150px] text-center font-bold">
          <motion.div
            initial="initial"
            whileHover="hovered"
            className="relative overflow-hidden text-center lg:border-black lg:border-2 lg:rounded-md lg:hover:cursor-pointer bg-marvelRed"
          >
            <Link
              to={item.path}
              aria-current={currentPath === item.path ? "page" : undefined}
            >
              <motion.button
                variants={buttonVariants}
                transition={{ bounce: false }}
                className="lg:bg-[url('/button-bg.webp')] bg-center bg-cover w-full py-2 text-white lg:text-black lg:text-shadow-white-outline text-shadow-black-outline"
              >
                {item.name.toUpperCase()}
              </motion.button>

              <motion.button
                className="absolute inset-0 text-white"
                variants={shadowVariants}
              >
                {item.name.toUpperCase()}
              </motion.button>
            </Link>
          </motion.div>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
