import { FC, useEffect } from "react";
import LibraryDashboard from "./LibraryDashboard/LibraryDasboard";
import BooksSection from "../HomePage/RecommendedBooks/RecommendedBooks";
import { getUsersBooks } from "../../redux/books/booksOperations";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useTranslation } from "react-i18next";

const Library: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const pageName = "library";
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getUsersBooks());
  }, [dispatch]);

  return (
    <section>
      <div className="wrapper">
        <div className="mt-3 desktop:mt-4 flex flex-col gap-2.5 tablet:gap-4 desktop:flex-row pb-5">
          <LibraryDashboard />
          <BooksSection title={t("library")} pageName={pageName} />
        </div>
      </div>
    </section>
  );
};

export default Library;
