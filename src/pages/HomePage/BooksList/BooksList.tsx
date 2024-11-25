import { FC } from "react";
import BooksItem from "../BooksItem/BooksItem";
import { IBook, IBookLibrary } from "../../../redux/books/types";

export type BooksListProps = {
  results: IBook[] | IBookLibrary[];
  pageName?: "home" | "library" | "reading" | undefined;
};

const BooksList: FC<BooksListProps> = ({ results, pageName }) => {
  return (
    <ul className="grid grid-cols-2 gap-5 tablet:grid-cols-4 tablet:gap-6 desktop:grid-cols-5 desktop:gap-6">
      {results.length > 0 &&
        results.map((result) => (
          <BooksItem key={result._id} result={result} pageName={pageName} />
        ))}
    </ul>
  );
};

export default BooksList;
