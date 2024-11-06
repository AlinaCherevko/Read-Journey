import { FC, useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { getRecommendedBooks } from "../../redux/books/booksOperations";
import BooksSection from "./RecommendedBooks/RecommendedBooks";

const HomePage: FC = () => {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const pageName = "home";

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommendedBooks({ page, title, author }));
  }, [dispatch, page, author, title]);
  return (
    <section>
      <div className="wrapper">
        <div className="mt-3 desktop:mt-4 flex flex-col gap-2.5 tablet:gap-4 desktop:flex-row pb-5">
          <Dashboard
            setTitle={setTitle}
            setAuthor={setAuthor}
            setPage={setPage}
          />
          <BooksSection
            setPage={setPage}
            page={page}
            title="Recommended books"
            pageName={pageName}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
