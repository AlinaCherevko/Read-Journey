import { FC } from "react";
import BooksItem from "../BooksItem/BooksItem";
import { BooksListProps } from "./types";

const BooksList: FC<BooksListProps> = ({ results }) => {
  return (
    <ul className="grid grid-cols-2 gap-5 tablet:grid-cols-4 tablet:gap-6 desktop:grid-cols-5 desktop:gap-6">
      {results.length > 0 &&
        results.map((result) => <BooksItem key={result._id} result={result} />)}
    </ul>
  );
};

export default BooksList;
