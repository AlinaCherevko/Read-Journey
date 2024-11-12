import { FC } from "react";
import { useSelector } from "react-redux";
import { selectCurrentBook } from "../../../redux/books/booksSelectors";
import ReadingInfo from "../ReadingInfo/ReadingInfo";

const Diary: FC = () => {
  const currentBook = useSelector(selectCurrentBook);
  console.log(currentBook?.progress);

  return (
    <div className="mt-10 tablet:mt-0 flex flex-col gap-4">
      <h2 className="text-primary-white text-mediumSmall font-bold tablet:text-lightMedium">
        Diary
      </h2>
      <ul className="p-4 bg-light-bg-color rounded-md flex flex-col gap-3.5 h-[211px] tablet:h-[252px] tablet:w-[321px] desktop:w-auto overflow-auto">
        {currentBook?.progress &&
          currentBook.progress.map((item) => (
            <ReadingInfo key={item._id} item={item} />
          ))}
      </ul>
    </div>
  );
};

export default Diary;
