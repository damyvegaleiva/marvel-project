type THeroTitleProps = {
  heroName: string;
};

const HeroName: React.FC<THeroTitleProps> = ({ heroName }) => {
  return (
    <h2 className="text-3xl text-white text-shadow-black-outline ">
      {heroName}
    </h2>
  );
};

export default HeroName;
