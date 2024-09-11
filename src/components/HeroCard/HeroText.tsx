type THeroTextProps = {
  heroDescription: string;
};

const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const HeroText: React.FC<THeroTextProps> = ({ heroDescription }) => {
  return (
    <p className="flex-grow text-xl text-white font-marvel font-[700] italic">
      {truncateText(
        heroDescription || "This hero doesn't like descriptions.",
        50
      )}
    </p>
  );
};

export default HeroText;
