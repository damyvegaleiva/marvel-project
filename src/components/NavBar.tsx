import NavList from "./NavList";

const NavBar: React.FC = () => {
  return (
    <nav
      className="bg-white border-t-2 border-white "
      aria-label="Main Navigation"
    >
      <NavList />
    </nav>
  );
};

export default NavBar;
