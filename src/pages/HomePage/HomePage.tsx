import { FC, useState, useEffect, useRef } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import BooksSection from "./RecommendedBooks/RecommendedBooks";
import { useTranslation } from "react-i18next";

import { getRecommendedBooks } from "../../redux/books/booksOperations";
import { selectRecommendedBooks } from "../../redux/books/booksSelectors";
import { useSearchParams } from "react-router-dom";

const HomePage: FC = () => {
  const { results, totalPages } = useSelector(selectRecommendedBooks);
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation();

  const isFirstRender = useRef(true);
  const pageName = "home";
  const perPage = 10;
  const [page, setPage] = useState(() => {
    const res = localStorage.getItem("page");
    return res ? +res : 1;
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title") || "";
  const author = searchParams.get("author") || "";

  const onTitleSearch = (value: string) => {
    setSearchParams({
      title: value,
      author,
    });
  };
  console.log(totalPages);
  const onAuthorSearch = (value: string) => {
    setSearchParams({
      title,
      author: value,
    });
  };

  useEffect(() => {
    if (isFirstRender.current && results.length !== 0) {
      if (results.length < perPage) {
        dispatch(getRecommendedBooks({ page, title, author }));
      }
      isFirstRender.current = false;
      return;
    }
    const timeOutId = setTimeout(() => {
      dispatch(getRecommendedBooks({ page, title, author }));
    }, 300);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [dispatch, page, title, author]);

  return (
    <section className="pt-3 desktop:pt-4 pb-5">
      <div className="wrapper">
        <div className="flex flex-col gap-2.5 tablet:gap-4 desktop:flex-row">
          <Dashboard
            setTitle={onTitleSearch}
            setAuthor={onAuthorSearch}
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
