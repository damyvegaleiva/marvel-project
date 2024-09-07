import SearchBox from "../components/SearchBox";

const HomeContainer = () => {
  return (
    <main>
      <h1 className="absolute top-0 left-0 w-full text-5xl text-center text-white bg-black">
        WELCOME TO MARVEL-HEROES-PEDIA
      </h1>

      <SearchBox />
    </main>
  );
};

export default HomeContainer;
