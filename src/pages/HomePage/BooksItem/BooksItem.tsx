import { FC } from "react";
import { BookProps } from "./types";

const BooksItem: FC<BookProps> = ({ result }) => {
  return (
    <div className="w-[137px] h-auto">
      <img
        className="w-[137px] h-[208px]"
        src={result.imageUrl}
        alt="book-rec"
      />
      <h3>{result.title}</h3>
      <p>{result.author}</p>
    </div>
  );
};

export default BooksItem;
