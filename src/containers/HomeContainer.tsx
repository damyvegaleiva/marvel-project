import SearchBox from "../components/SearchBox";

const HomeContainer = () => {
  return (
    <main>
      <h1 className="absolute top-0 left-0 w-full m-auto text-center text-white bg-black md:text-lg">
        WELCOME TO MARVEL-UNIVERSE-PEDIA
      </h1>

      <SearchBox />
    </main>
  );
};

export default HomeContainer;
