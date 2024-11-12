import { FC } from "react";
import { IProgress } from "../../../redux/books/types";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentBook } from "../../../redux/books/booksSelectors";
import Icon from "../../../components/Icon/Icon";
import { deleteSession } from "../../../redux/books/booksOperations";
import { AppDispatch } from "../../../redux/store";

export type InfoProps = {
  item: IProgress;
};

const ReadingInfo: FC<InfoProps> = ({ item }) => {
  const currentBook = useSelector(selectCurrentBook);
  const dispatch: AppDispatch = useDispatch();
  const startReadingData = new Date(item.startReading);
  const endReadingData = new Date(item.finishReading);
  const duration = endReadingData.getTime() - startReadingData.getTime();
  console.log(currentBook);
  const handleDeleteReadingSession = () => {
    if (currentBook) {
      console.log(currentBook._id);
      dispatch(deleteSession({ bookId: currentBook._id, readingId: item._id }));
    }
  };

  const pagesDone =
    item.finishPage - item.startPage === 0
      ? 1
      : item.finishPage - item.startPage;

  const pages = item.finishPage ? pagesDone : null;

  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

  const readingTime = item.finishReading
    ? `${days ? `${days} days, ` : ""}${
        hours ? `${hours} hours, ` : ""
      }${minutes} minutes`
    : null;
  const speed = item.speed === 0 ? "< 1" : item.speed;

  const currentDate = startReadingData.toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const percentOfReading = currentBook?.totalPages
    ? ((pagesDone * 100) / currentBook?.totalPages).toFixed(1)
    : null;

  return (
    <li className="flex justify-between">
      <div>
        <h3 className="text-lightSmall font-bold text-primary-white mb-2">
          {currentDate}
        </h3>
        {percentOfReading && item.finishReading && (
          <p className="text-small text-primary-white mb-2">
            {percentOfReading} %
          </p>
        )}
        {item.finishReading && <p className="text-tiny">{readingTime}</p>}
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          {pages && <p className="text-lightSmall">{pages} pages</p>}
          {(item.speed || item.speed === 0) && (
            <p className="text-tiny">{speed} pages per hour</p>
          )}
        </div>
        <button onClick={handleDeleteReadingSession}>
          <Icon
            id="icon-trash"
            width="18px"
            height="18px"
            fill="transparent"
            stroke="#f9f9f9"
          />
        </button>
      </div>
    </li>
  );
};

export default ReadingInfo;
