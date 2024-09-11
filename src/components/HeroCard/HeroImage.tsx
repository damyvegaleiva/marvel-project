type THeroImageProps = {
  heroName: string;
  thumbnailUrl: string;
  thumbnailExt: string;
};

const HeroImage: React.FC<THeroImageProps> = ({
  heroName,
  thumbnailUrl,
  thumbnailExt,
}) => {
  return (
    <img
      src={
        thumbnailUrl.includes("not_available")
          ? "/not-image-hero.jpg"
          : `${thumbnailUrl}.${thumbnailExt}`
      }
      alt={`${heroName} image`}
      className="w-[150px] h-[150px] border-[3px] rounded-[60%]"
    />
  );
};

export default HeroImage;
