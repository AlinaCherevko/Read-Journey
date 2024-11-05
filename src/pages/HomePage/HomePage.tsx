import { FC, useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendedBooks } from "../../redux/books/booksOperations";
import BooksSection from "./RecommendedBooks/RecommendedBooks";
import { selectRecommendedBooks } from "../../redux/books/booksSelectors";

const HomePage: FC = () => {
  const { results } = useSelector(selectRecommendedBooks);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const isHomePage = true;

  console.log(title);
  console.log(author);

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
            items={results}
            title="Recommended books"
            isHomePage={isHomePage}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
