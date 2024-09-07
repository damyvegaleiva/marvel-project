import NavList from "./NavList";

const NavBar: React.FC = () => {
  return (
    <nav
      className="mt-10 bg-white border-t-2 border-black"
      aria-label="Main Navigation"
    >
      <NavList />
    </nav>
  );
};

export default NavBar;
