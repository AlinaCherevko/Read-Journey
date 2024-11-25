import { FC } from "react";
import { useSelector } from "react-redux";
import { selectRecommendedBooks } from "../../redux/books/booksSelectors";
import { toast } from "react-toastify";

type PaginationProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

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
    if (page === 1) {
      toast.info("No more pages previously");
      return;
    }

    setPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="flex gap-2">
      <button
        disabled={page === 1}
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
