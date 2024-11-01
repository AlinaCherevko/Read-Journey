import { FC } from "react";
import { BookProps } from "./types";

const BooksItem: FC<BookProps> = ({ result }) => {
  return (
    <div className="w-full tablet:w-[137px] h-auto">
      <img
        className="w-full tablet:w-[137px] h-[208px] mb-2 rounded-sm"
        src={result.imageUrl}
        alt="book-rec"
      />
      <h3 className="text-small text-primary-white font-bold mb-0.5 whitespace-nowrap overflow-hidden overflow-ellipsis">
        {result.title}
      </h3>
      <p className="text-tiny">{result.author}</p>
    </div>
  );
};

export default BooksItem;
