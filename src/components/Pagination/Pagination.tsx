import { FC } from "react";
import { useSelector } from "react-redux";
import { selectRecommendedBooks } from "../../redux/books/booksSelectors";

type PaginationProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

const Pagination: FC<PaginationProps> = ({ setPage, page }) => {
  const { totalPages } = useSelector(selectRecommendedBooks);

  const handleNextBtnClick = () => {
    if (page === totalPages) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevBtnClick = () => {
    if (page === 1) {
      return;
    }

    setPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="flex gap-2">
      <button
        disabled={page === 1}
        onClick={handlePrevBtnClick}
        className={`w-10 h-10 rounded-full border border-main-border-color hover:text-primary-white hover:border-primary-white ${
          page === 1
            ? "hover:border-main-border-color hover:text-main-text-color cursor-default"
            : ""
        }`}
      >
        <span>&lt;</span>
      </button>
      <button
        disabled={page === totalPages}
        onClick={handleNextBtnClick}
        className={`w-10 h-10 rounded-full border border-main-border-color hover:text-primary-white hover:border-primary-white ${
          page === totalPages
            ? "hover:border-main-border-color hover:text-main-text-color cursor-default"
            : ""
        }`}
      >
        <span>&gt;</span>
      </button>
    </div>
  );
};

export default Pagination;
