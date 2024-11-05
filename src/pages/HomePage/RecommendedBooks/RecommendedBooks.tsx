import { FC } from "react";
import { selectBooksLoading } from "../../../redux/books/booksSelectors";
import { useSelector } from "react-redux";
import BooksList from "../BooksList/BooksList";
import Pagination from "../../../components/Pagination/Pagination";
import Loader from "../../../components/Loader/Loader";
import { IBook, IBookLibrary } from "../../../redux/books/types";

export type RecBooksProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  title?: string;
  items?: IBook[] | IBookLibrary[];
  isHomePage?: boolean;
};

const BooksSection: FC<RecBooksProps> = ({
  setPage,
  page,
  title,
  items,
  isHomePage,
}) => {
  const isLoading = useSelector(selectBooksLoading);

  return (
    <div className="bg-gray-bg-color rounded-lg px-5 py-10 tablet:px-10 shrink-0 desktop:w-[847px] desktop:min-h-[660px] desktop:pb-7">
      <div className="flex mb-8 justify-between">
        <h1 className="text-primary-white text-big font-bold  tablet:text-lightLarge">
          {title}
        </h1>
        <Pagination setPage={setPage} page={page} />
      </div>
      {isLoading ? (
        <Loader />
      ) : items && items.length > 0 ? (
        <BooksList results={items} isHomePage={isHomePage} />
      ) : (
        <p>Haven't found any book</p>
      )}
    </div>
  );
};

export default BooksSection;
