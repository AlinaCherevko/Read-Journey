import { FC } from "react";
import { selectRecommendedBooks } from "../../../redux/books/booksSelectors";
import { useSelector } from "react-redux";
import BooksList from "../BooksList/BooksList";
import Pagination from "../../../components/Pagination/Pagination";

export type RecBooksProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  title?: string;
  author?: string;
};
const RecommendedBooks: FC<RecBooksProps> = ({
  setPage,
  page,
  title,
  author,
}) => {
  const { results } = useSelector(selectRecommendedBooks);
  console.log(results);
  return (
    <div className="bg-gray-bg-color rounded-lg px-5 py-10 tablet:px-10 shrink-0 desktop:w-[847px]">
      <div className="flex mb-8 justify-between">
        <h1 className="text-primary-white text-big font-bold  tablet:text-lightLarge">
          Recommended
        </h1>
        <Pagination setPage={setPage} page={page} />
      </div>
      {results && <BooksList results={results} />}
      {results.length === 0 && (author || title) && (
        <p>Haven't found any book</p>
      )}
    </div>
  );
};

export default RecommendedBooks;
