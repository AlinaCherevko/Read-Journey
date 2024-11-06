import { FC, useEffect, useState } from "react";
import {
  selectBooksLoading,
  selectLibrariesBooks,
  selectRecommendedBooks,
} from "../../../redux/books/booksSelectors";
import { useSelector } from "react-redux";
import BooksList from "../BooksList/BooksList";
import Pagination from "../../../components/Pagination/Pagination";
import Loader from "../../../components/Loader/Loader";
import { IBook, IBookLibrary } from "../../../redux/books/types";
import Selector from "../../../components/Selector/Selector";

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
  isHomePage,
}) => {
  const { results } = useSelector(selectRecommendedBooks);
  const inLibrary = useSelector(selectLibrariesBooks);
  const isLoading = useSelector(selectBooksLoading);
  const [value, setValue] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<IBookLibrary[]>([]);

  const libraryItems = value ? filteredItems : inLibrary;

  const items = isHomePage ? results : libraryItems;
  // console.log(value);

  useEffect(() => {
    setFilteredItems(inLibrary.filter((item) => item.status === value));
  }, [value, inLibrary]);

  return (
    <div className="bg-gray-bg-color rounded-lg px-5 py-10 tablet:px-10 shrink-0 desktop:w-[847px] desktop:min-h-[660px] desktop:pb-7">
      <div className="flex mb-8 justify-between">
        <h1 className="text-primary-white text-big font-bold  tablet:text-lightLarge">
          {title}
        </h1>
        {isHomePage && <Pagination setPage={setPage} page={page} />}
        {!isHomePage && <Selector onChange={setValue} />}
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
