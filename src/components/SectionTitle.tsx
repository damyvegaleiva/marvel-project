type TSectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<TSectionTitleProps> = ({ title }) => {
  return (
    <div
      className="relative -mt-[75px] -mb-[100px] lg:-mt-[225px] lg:-mb-[250px] xl:-mt-[325px] xl:-mb-[350px] 2xl:-mt-[425px] 2xl:-mb-[450px] -z-10 overflow-hidden"
      role="banner"
    >
      <h1 className="w-full text-center text-[10rem] text-stroke-black-extra-thin opacity-50 xl:text-[35rem] 2xl:text-[45rem] bg-[url('/comic-bg.jpg')] bg-clip-text text-transparent bg-contain font-bangers md:text-stroke-thin md:opacity-70 lg:text-stroke-black lg:text-[25rem]">
        {title.toUpperCase()}
      </h1>

      <span className=" text-[4rem] block text-transparent bg-contain font-bangers lg:text-[9rem] px-5 bg-clip-text text-stroke-black-extra-thin bg-[url('/comic-bg.jpg')] text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] underline-gradient">
        {title.toUpperCase()}
      </span>
    </div>
  );
};

export default SectionTitle;
