import { FC, useEffect, useState } from "react";
import CircleCharts from "../CircleCharts/CircleCharts";
import { useSelector } from "react-redux";
import { selectCurrentBook } from "../../../redux/books/booksSelectors";
import { useTranslation } from "react-i18next";
import { IProgress } from "../../../redux/books/types";

const Statistic: FC = () => {
  const { t } = useTranslation();
  const [percentOfReading, setPercentOfReading] = useState(0);
  const currentBook = useSelector(selectCurrentBook);
  const progress = currentBook?.progress;
  const totalPages = currentBook?.totalPages;

  const maxPages = progress
    ? Math.max(...progress.map((item: IProgress) => item.finishPage || 0))
    : 0;

  useEffect(() => {
    if (!progress) return;

    if (maxPages && totalPages)
      setPercentOfReading(+((maxPages / totalPages) * 100).toFixed(1));
  }, [progress, totalPages, maxPages]);

  return (
    <div>
      <p className="hidden desktop:flex desktop:text-small mb-5">
        {t("Statistics_message")}
      </p>
      <div className=" bg-light-bg-color rounded-md flex flex-col justify-center items-center gap-0.5 h-[211px] tablet:h-[252px] tablet:w-[321px] desktop:w-auto overflow-auto">
        {progress && percentOfReading > 0 ? (
          <CircleCharts percentage={percentOfReading} />
        ) : (
          <img src="/books-lg.png" alt="book-q" />
        )}
        {maxPages > 0 && (
          <p className="flex text-tiny mx-auto">
            {maxPages > 1 ? maxPages : ">1"} {t("pages read")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Statistic;
