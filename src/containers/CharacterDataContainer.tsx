import { CHARACTERS_ALL_URL } from "../config/config";
import useFetch from "../hooks/useFetch";

const CharacterDataContainer = () => {
  const { data: charactersData, isLoading } = useFetch(CHARACTERS_ALL_URL);
  console.log(charactersData);

  return (
    <div>
      <h1>CHARACTERS</h1>
    </div>
  );
};

export default CharacterDataContainer;
