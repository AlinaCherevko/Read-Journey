import { FC } from "react";
import BooksItem from "../BooksItem/BooksItem";
import { BooksListProps } from "./types";

const BooksList: FC<BooksListProps> = ({ results }) => {
  return (
    <ul className="flex flex-wrap gap-5">
      {results.length > 0 &&
        results.map((result) => <BooksItem key={result._id} result={result} />)}
    </ul>
  );
};

export default BooksList;
