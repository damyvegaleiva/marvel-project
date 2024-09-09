type TBurgerButtonProps = {
  handleClick: () => void;
  isOpen: boolean;
};

const BurgerButton: React.FC<TBurgerButtonProps> = ({
  handleClick,
  isOpen,
}) => {
  const burgerButton = isOpen ? "x-button.png" : "fav-icon.png";
  const buttonLabel = isOpen
    ? "Close navigation menu."
    : "Open navigation menu.";

  return (
    <button
      onClick={handleClick}
      aria-expanded={isOpen}
      aria-label={buttonLabel}
      className="ml-auto w-14 h-14 lg:hidden"
    >
      <img src={burgerButton} alt="" className="w-full h-full" />
    </button>
  );
};

export default BurgerButton;
