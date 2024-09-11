import NavItem from "./NavItem";

type TNavListProps = {
  isOpen: boolean;
};

const navItems = [
  { name: "Heroes", path: "/heroes" },
  { name: "Comics", path: "/comics" },
  { name: "Creators", path: "/creators" },
];

const NavList: React.FC<TNavListProps> = ({ isOpen }) => {
  const hideToggleClass = !isOpen && "translate-x-[-200%]";

  return (
    <ul
      className={`w-full flex absolute lg:static top-full flex-col justify-center items-center bg-marvelRed lg:flex-row lg:py-2 text-[1rem] lg:gap-10 lg:bg-[#fafafa] lg:translate-x-0 transition-transform duration-1000 ${hideToggleClass}`}
    >
      {navItems.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </ul>
  );
};

export default NavList;
