type TPaginationButtonProps = {
  offsetValue: number;
  handleClick: (action: string) => void;
};

const PaginationButton: React.FC<TPaginationButtonProps> = ({
  offsetValue,
  handleClick,
}) => {
  return (
    <div className="flex items-end justify-center gap-20 font-bangers lg:w-[60%] mx-auto mt-5 text-white text-xl">
      {offsetValue !== 0 && (
        <button
          className="duration-700 lg:hover:text-black"
          onClick={() => handleClick("")}
        >
          &lt; PREV
        </button>
      )}

      <button
        className="duration-700 lg:hover:text-black"
        onClick={() => handleClick("more")}
      >
        NEXT &gt;
      </button>
    </div>
  );
};

export default PaginationButton;
