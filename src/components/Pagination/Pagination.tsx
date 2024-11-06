import { FC } from "react";
import { useSelector } from "react-redux";
import { selectRecommendedBooks } from "../../redux/books/booksSelectors";
import { toast } from "react-toastify";
import { PaginationProps } from "./types";

const Pagination: FC<PaginationProps> = ({ setPage, page }) => {
  const { totalPages } = useSelector(selectRecommendedBooks);

  const handleNextBtnClick = () => {
    if (page === totalPages) {
      toast.info("You've reached the last page");
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevBtnClick = () => {
    setPage((prevPage) => prevPage - 1);
  };
  return (
    <div className="flex gap-2">
      <button
        onClick={handlePrevBtnClick}
        className="w-10 h-10 rounded-full border border-main-border-color hover:text-primary-white"
      >
        <span>&lt;</span>
      </button>
      <button
        onClick={handleNextBtnClick}
        className="w-10 h-10 rounded-full border border-main-border-color hover:text-primary-white"
      >
        <span>&gt;</span>
      </button>
    </div>
  );
};

export default Pagination;
