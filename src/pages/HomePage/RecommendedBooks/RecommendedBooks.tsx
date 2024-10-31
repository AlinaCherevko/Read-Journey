import { FC } from "react";
import { selectRecommendedBooks } from "../../../redux/books/booksSelectors";
import { useSelector } from "react-redux";
import BooksList from "../BooksList/BooksList";

const RecommendedBooks: FC = () => {
  const { results } = useSelector(selectRecommendedBooks);
  console.log(results);
  return (
    <div className="bg-gray-bg-color rounded-lg px-5 py-10">
      <h1 className="text-primary-white text-big font-bold mb-8 tablet:text-lightLarge">
        Recommended
      </h1>
      <BooksList results={results} />
    </div>
  );
};

export default RecommendedBooks;
