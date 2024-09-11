type THeroTitleProps = {
  heroName: string;
};

const HeroName: React.FC<THeroTitleProps> = ({ heroName }) => {
  return (
    <h2 className="text-[1.75rem] w-full text-white text-shadow-black-outline font-luckiestGuy">
      {heroName}
    </h2>
  );
};

export default HeroName;
