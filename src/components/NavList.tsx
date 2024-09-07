import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

type NavItem = {
  name: string;
  path: string;
};

const listItems: NavItem[] = [
  {
    name: "Characters",
    path: "/characters",
  },
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

const NavList: React.FC = () => {
  const { pathname: currentPath } = useLocation();

  return (
    <ul className="flex justify-center items-center py-2 text-[1rem] gap-10">
      {listItems.map((item, index) => (
        <li key={index}>
          <motion.div
            initial="initial"
            whileHover="hovered"
            className={`relative block overflow-hidden w-[150px] text-center border-black bg-marvelRed text-white font-bold rounded-md bg-blue-primary hover:cursor-pointer border-2 `}
          >
            <Link
              to={item.path}
              aria-current={currentPath === item.path ? "page" : undefined}
            >
              <motion.button
                variants={buttonVariants}
                transition={{ bounce: false }}
                className="bg-[url('/button-bg.webp')] bg-center bg-cover w-full py-2 text-black text-shadow-white-outline"
              >
                {item.name.toUpperCase()}
              </motion.button>

              <motion.button
                className="absolute inset-0 text-white text-shadow-black-outline"
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
