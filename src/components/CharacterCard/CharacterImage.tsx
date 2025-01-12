type TCharacterImageProps = {
  characterName: string;
  thumbnailUrl: string;
  thumbnailExt: string;
};

const CharacterImage: React.FC<TCharacterImageProps> = ({
  characterName,
  thumbnailUrl,
  thumbnailExt,
}) => {
  return (
    <img
      src={
        thumbnailUrl.includes("not_available") || thumbnailExt === "gif"
          ? "/not-image-character.jpg"
          : `${thumbnailUrl}.${thumbnailExt}`
      }
      alt={`${characterName} image`}
      className="w-[150px] h-[150px] border-[3px] rounded-[60%]"
    />
  );
};

export default CharacterImage;
