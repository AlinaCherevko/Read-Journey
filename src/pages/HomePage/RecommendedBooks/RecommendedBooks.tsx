import { FC } from "react";
import {
  selectBooksLoading,
  selectRecommendedBooks,
} from "../../../redux/books/booksSelectors";
import { useSelector } from "react-redux";
import BooksList from "../BooksList/BooksList";
import Pagination from "../../../components/Pagination/Pagination";
import Loader from "../../../components/Loader/Loader";

export type RecBooksProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  title?: string;
  author?: string;
};
const RecommendedBooks: FC<RecBooksProps> = ({
  setPage,
  page,
  // title,
  // author,
}) => {
  const { results } = useSelector(selectRecommendedBooks);
  const isLoading = useSelector(selectBooksLoading);

  console.log(results);
  return (
    <div className="bg-gray-bg-color rounded-lg px-5 py-10 tablet:px-10 shrink-0 desktop:w-[847px] desktop:min-h-[660px] desktop:pb-7">
      <div className="flex mb-8 justify-between">
        <h1 className="text-primary-white text-big font-bold  tablet:text-lightLarge">
          Recommended
        </h1>
        <Pagination setPage={setPage} page={page} />
      </div>
      {isLoading ? (
        <Loader />
      ) : results && results.length > 0 ? (
        <BooksList results={results} />
      ) : (
        <p>Haven't found any book</p>
      )}
    </div>
  );
};

export default RecommendedBooks;
