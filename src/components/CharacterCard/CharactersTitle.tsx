type TCharacterTitleProps = {
  characterName: string;
};

const CharacterName: React.FC<TCharacterTitleProps> = ({ characterName }) => {
  return (
    <h2 className="text-[1.75rem] w-full text-white text-shadow-black-outline font-luckiestGuy">
      {characterName}
    </h2>
  );
};

export default CharacterName;
