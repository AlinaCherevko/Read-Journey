import { FC, useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import RecommendedBooks from "./RecommendedBooks/RecommendedBooks";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendedBooks } from "../../redux/books/booksOperations";
import { selectRecommendedBooks } from "../../redux/books/booksSelectors";

const HomePage: FC = () => {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const recommended = useSelector(selectRecommendedBooks);

  console.log(recommended);

  useEffect(() => {
    dispatch(getRecommendedBooks({ page, title, author }));
  }, [dispatch, page, author, title]);
  return (
    <section>
      <div className="container1">
        <div className="mt-3 desktop:mt-4 flex flex-col gap-2.5 tablet:gap-4 desktop:flex-row">
          <Dashboard />
          <RecommendedBooks />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
