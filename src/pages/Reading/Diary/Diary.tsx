import { FC } from "react";
import { useSelector } from "react-redux";
import { selectCurrentBook } from "../../../redux/books/booksSelectors";
import ReadingInfo from "../ReadingInfo/ReadingInfo";
import { IProgress } from "../../../redux/books/types";

const Diary: FC = () => {
  const currentBook = useSelector(selectCurrentBook);

  return (
    <div className="">
      <ul className="p-4 bg-light-bg-color rounded-md flex flex-col gap-3.5 h-[211px] tablet:h-[252px] tablet:w-[321px] desktop:w-auto overflow-auto">
        {currentBook?.progress &&
          currentBook.progress.map((item: IProgress) => (
            <ReadingInfo key={item._id} item={item} />
          ))}
      </ul>
    </div>
  );
};

export default Diary;
