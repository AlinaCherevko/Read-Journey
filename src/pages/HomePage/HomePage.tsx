import { FC, useState, useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import BooksSection from "./RecommendedBooks/RecommendedBooks";
import { useTranslation } from "react-i18next";
import // getRecommendedBooks,
//getUsersBooks,
"../../redux/books/booksOperations";
import {
  selectLibrariesBooks,
  // selectRecommendedBooks,
} from "../../redux/books/booksSelectors";
import { selectIsAuth } from "../../redux/auth/authSelectors";
import { getRecommendedBooks } from "../../redux/books/booksOperations";

const HomePage: FC = () => {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const pageName = "home";
  const dispatch: AppDispatch = useDispatch();
  const booksInLibrary = useSelector(selectLibrariesBooks);
  const isAuth = useSelector(selectIsAuth);
  const { t } = useTranslation();
  // const hasFetchedBooks = useRef(false);
  //console.log(hasFetchedBooks);
  // const recommendedBooks = useSelector(selectRecommendedBooks);
  console.log(booksInLibrary);
  console.log(isAuth);

  useEffect(() => {
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
