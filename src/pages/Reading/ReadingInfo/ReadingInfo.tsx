import { FC, memo } from "react";
import { IProgress } from "../../../redux/books/types";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentBook } from "../../../redux/books/booksSelectors";
import Icon from "../../../components/Icon/Icon";
import { deleteSession } from "../../../redux/books/booksOperations";
import { AppDispatch } from "../../../redux/store";
import AreaCharts from "../AreaCharts/AreaCharts";
import { useTranslation } from "react-i18next";
import {
  CalculateReadingPages,
  CalculateReadingTime,
  GetCurrentDate,
} from "../../../utils/utils";

export type InfoProps = {
  item: IProgress;
};

const ReadingInfo: FC<InfoProps> = ({ item }) => {
  const { t } = useTranslation();
  const currentBook = useSelector(selectCurrentBook);
  const dispatch: AppDispatch = useDispatch();
  const startReadingData = new Date(item.startReading);
  const endReadingData = new Date(item.finishReading);

  const handleDeleteReadingSession = () => {
    if (currentBook) {
      dispatch(deleteSession({ bookId: currentBook._id, readingId: item._id }));
    }
  };

  const { pages, pagesDone } = CalculateReadingPages(
    item.startPage,
    item.finishPage
  );

  const readingTime = CalculateReadingTime(
    startReadingData.getTime(),
    endReadingData.getTime(),
    t
  );
  const currentDate = GetCurrentDate(startReadingData);

  const speed = item.speed === 0 ? "< 1" : item.speed;

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
      <div className="flex w-[82px]">
        <div className="flex flex-col justify-between">
          {pages && (
            <p className="text-lightSmall">
              {pages} {t("pages")}
            </p>
          )}
          <AreaCharts item={item} />
          {(item.speed || item.speed === 0) && (
            <p className="text-tiny">
              {speed} {t("pages per hour")}
            </p>
          )}
        </div>
        <button onClick={handleDeleteReadingSession}>
          <Icon
            id="icon-trash"
            width="14px"
            height="14px"
            fill="transparent"
            stroke="#f9f9f9"
          />
        </button>
      </div>
    </li>
  );
};

export default memo(ReadingInfo);
