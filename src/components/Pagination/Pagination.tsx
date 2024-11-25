import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRecommendedBooks } from "../../redux/books/booksSelectors";

type PaginationProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

const Pagination: FC<PaginationProps> = ({ setPage, page }) => {
  const { totalPages } = useSelector(selectRecommendedBooks);

  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(page));
  }, [page]);

  const isNextPageDisabled =
    page === totalPages || totalPages === 1 || !totalPages;

  const isPreviousPageDisabled = page === 1 || totalPages === 1 || !totalPages;

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
        disabled={isPreviousPageDisabled}
        onClick={handlePrevBtnClick}
        className={`w-10 h-10 rounded-full${
          isPreviousPageDisabled
            ? " border border-main-text-color text-main-text-color cursor-default"
            : " text-primary-white border border-primary-white"
        }`}
      >
        <span>&lt;</span>
      </button>
      <button
        disabled={isNextPageDisabled}
        onClick={handleNextBtnClick}
        className={`w-10 h-10 rounded-full${
          isNextPageDisabled
            ? " border border-main-text-color text-main-text-color cursor-default"
            : " text-primary-white border border-primary-white"
        }`}
      >
        <span>&gt;</span>
      </button>
    </div>
  );
};

export default Pagination;
