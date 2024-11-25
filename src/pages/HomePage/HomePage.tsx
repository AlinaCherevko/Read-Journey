import { FC, useState, useEffect, useRef } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import BooksSection from "./RecommendedBooks/RecommendedBooks";
import { useTranslation } from "react-i18next";

import { getRecommendedBooks } from "../../redux/books/booksOperations";
import { selectRecommendedBooks } from "../../redux/books/booksSelectors";

const HomePage: FC = () => {
  const { results } = useSelector(selectRecommendedBooks);
  const [page, setPage] = useState(() => {
    const res = localStorage.getItem("page");
    return res ? +res : 1;
  });
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const pageName = "home";
  const dispatch: AppDispatch = useDispatch();

  const { t } = useTranslation();

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current && results.length !== 0) {
      isFirstRender.current = false;
      return;
    }
    if (results.length === 0) {
      dispatch(getRecommendedBooks({ page }));
    }

    const searchOptions = {
      title: title || "",
      author: author || "",
    };

    const timeOutId = setTimeout(() => {
      dispatch(getRecommendedBooks({ page, ...searchOptions }));
    }, 350);

    return () => clearTimeout(timeOutId);
  }, [dispatch, page, title, author, results.length]);

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
