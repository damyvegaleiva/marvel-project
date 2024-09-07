import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/character/${searchValue}`);
  };

  return (
    <search>
      <input
        type="text"
        value={searchValue}
        placeholder="Search your hero..."
        className="border-2 border-black"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        className="px-3 py-2 ml-2 border-2 border-black"
        type="submit"
        onClick={handleSubmit}
      >
        SEARCH
      </button>
    </search>
  );
};

export default SearchBox;
