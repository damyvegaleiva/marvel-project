type TCharacterTextProps = {
  characterDescription: string;
};

const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const CharacterText: React.FC<TCharacterTextProps> = ({
  characterDescription,
}) => {
  return (
    <p className="flex-grow text-xl text-white font-marvel font-[700] italic px-10">
      {truncateText(
        characterDescription || "This hero doesn't like descriptions.",
        50
      )}
    </p>
  );
};

export default CharacterText;
