import { FC, useEffect, useState } from "react";
import {
  selectLibrariesBooks,
  selectRecommendedBooks,
} from "../../../redux/books/booksSelectors";
import { useSelector } from "react-redux";
import BooksList from "../BooksList/BooksList";
import Pagination from "../../../components/Pagination/Pagination";
// import Loader from "../../../components/Loader/Loader";
import { IBookLibrary } from "../../../redux/books/types";
import Selector from "../../../components/Selector/Selector";
import { useTranslation } from "react-i18next";

export type RecBooksProps = {
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  page?: number;
  title: string;
  pageName: "home" | "library" | "reading";
};

const BooksSection: FC<RecBooksProps> = ({
  setPage,
  page,
  title,
  pageName,
}) => {
  const { results } = useSelector(selectRecommendedBooks);
  const booksInLibrary = useSelector(selectLibrariesBooks);
  const [value, setValue] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<IBookLibrary[]>([]);
  const libraryItems = value ? filteredItems : booksInLibrary;

  const { t } = useTranslation();

  const progressOptions = [
    { value: "all", label: t("Show all") },
    { value: "unread", label: t("Unread") },
    { value: "in-progress", label: t("Inprogress") },
    { value: "done", label: t("Done") },
  ];

  const items = pageName === "home" ? results : libraryItems;

  useEffect(() => {
    setFilteredItems(
      booksInLibrary.filter((item: IBookLibrary) => item.status === value)
    );
  }, [value, booksInLibrary]);

  return (
    <div className="bg-gray-bg-color rounded-lg px-5 py-10 tablet:px-10 shrink-0 desktop:w-[847px] desktop:h-[660px] overflow-auto desktop:pb-7 scrollbar-thin scrollbar-webkit">
      <div className="flex mb-8 justify-between items-center">
        <h1 className="text-primary-white text-big font-bold  tablet:text-lightLarge">
          {title}
        </h1>
        {pageName === "home" && setPage && page && (
          <Pagination setPage={setPage} page={page} />
        )}
        {pageName === "library" && (
          <Selector options={progressOptions} onChange={setValue} />
        )}
      </div>
      {items && items.length > 0 ? (
        <BooksList results={items} pageName={pageName} />
      ) : (
        <p>Haven't found any book</p>
      )}
    </div>
  );
};

export default BooksSection;
