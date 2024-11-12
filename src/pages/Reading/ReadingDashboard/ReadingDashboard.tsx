import { FC } from "react";
import ReadingForm from "../ReadingForm/ReadingForm";
import { useSelector } from "react-redux";
import { selectCurrentBook } from "../../../redux/books/booksSelectors";
import Diary from "../Diary/Diary";
import { CurrentStatus } from "../../../redux/books/types";

const ReadingDashboard: FC = () => {
  const currentBook = useSelector(selectCurrentBook);
  const status =
    currentBook?.progress?.[currentBook.progress.length - 1]?.status;
  return (
    <div className="flex flex-col tablet:flex-row tablet:gap-10 desktop:flex-col bg-gray-bg-color w-full rounded-lg p-5 tablet:p-8 desktop:p-5 desktop:pt-10 desktop:w-[353px]">
      <div className="shrink-0">
        <span className="text-tiny text-primary-white mb-5 ml-3.5 tablet:text-small">
          {status === CurrentStatus.ACTIVE ? "Stop page" : "Start page"}
        </span>
        <ReadingForm />
      </div>
      {status ? (
        <Diary />
      ) : (
        <div className="mt-10 tablet:mt-0">
          <span className="text-mediumSmall text-primary-white font-bold ">
            Progress
          </span>
          <p className="text-small mt-3.5">
            Here you will see when and how much you read. To record, click on
            the red button above.
          </p>
          <div className="w-20 h-20 rounded-full bg-light-bg-color flex justify-center items-center mt-5 mx-auto tablet:h-[100px] tablet:w-[100px]">
            <img
              src="/sun.png"
              alt="sun-img"
              className="w-[32px] h-[32px] tablet:w-[50px] tablet:h-[50px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadingDashboard;
