import { FC, useEffect, useRef } from "react";
import LibraryDashboard from "./LibraryDashboard/LibraryDasboard";
import BooksSection from "../HomePage/RecommendedBooks/RecommendedBooks";
import { useTranslation } from "react-i18next";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getUsersBooks } from "../../redux/books/booksOperations";
import { selectLibrariesBooks } from "../../redux/books/booksSelectors";

// import { selectIsAuth } from "../../redux/auth/authSelectors";
// import { selectLibrariesBooks } from "../../redux/books/booksSelectors";
//import { getUsersBooks } from "../../redux/books/booksOperations";

const Library: FC = () => {
  const pageName = "library";
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const booksInLibrary = useSelector(selectLibrariesBooks);
  // const isAuth = useSelector(selectIsAuth);
  const hasFetchedBooks = useRef(false);

  // useEffect(() => {
  //   dispatch(getUsersBooks());
  // }, [dispatch]);
  useEffect(() => {
    if (!hasFetchedBooks.current && booksInLibrary.length === 0) {
      dispatch(getUsersBooks());
      hasFetchedBooks.current = true;
    }
  }, [dispatch, booksInLibrary.length]);

  return (
    <section className="pt-3 desktop:pt-4 pb-5">
      <div className="wrapper">
        <div className="flex flex-col gap-2.5 tablet:gap-4 desktop:flex-row">
          <LibraryDashboard />
          <BooksSection title={t("library")} pageName={pageName} />
        </div>
      </div>
    </section>
  );
};

export default Library;
