import { FC, useState, useEffect, useRef } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import BooksSection from "./RecommendedBooks/RecommendedBooks";
import { useTranslation } from "react-i18next";

import { getRecommendedBooks } from "../../redux/books/booksOperations";

const HomePage: FC = () => {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const pageName = "home";
  const dispatch: AppDispatch = useDispatch();

  const { t } = useTranslation();

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const searchOptions = {
      title: title || "",
      author: author || "",
    };

    dispatch(getRecommendedBooks({ page, ...searchOptions }));
  }, [dispatch, page, title, author]);

  return (
    <section className="pt-3 desktop:pt-4 pb-5">
      <div className="wrapper">
        <div className="flex flex-col gap-2.5 tablet:gap-4 desktop:flex-row">
          <Dashboard
            setTitle={setTitle}
            setAuthor={setAuthor}
            setPage={setPage}
            title={title}
            author={author}
          />
          <BooksSection
            setPage={setPage}
            page={page}
            title={t("Recommended books")}
            pageName={pageName}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
