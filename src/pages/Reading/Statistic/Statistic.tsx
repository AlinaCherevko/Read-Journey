import { FC, useEffect, useState } from "react";
import CircleCharts from "../CircleCharts/CircleCharts";
import { useSelector } from "react-redux";
import { selectCurrentBook } from "../../../redux/books/booksSelectors";

const Statistic: FC = () => {
  const [percentOfReading, setPercentOfReading] = useState(0);
  const currentBook = useSelector(selectCurrentBook);
  const progress = currentBook?.progress;
  const totalPages = currentBook?.totalPages;

  const maxPages = progress
    ? Math.max(...progress.map((item) => item.finishPage || 0))
    : 0;

  useEffect(() => {
    if (!progress) return;

    if (maxPages && totalPages)
      setPercentOfReading(+((maxPages / totalPages) * 100).toFixed(1));
  }, [progress, totalPages, maxPages]);
  console.log();

  return (
    <div>
      <p className="hidden desktop:flex desktop:text-small mb-5">
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </p>
      <div className=" bg-light-bg-color rounded-md flex flex-col justify-center items-center gap-0.5 h-[211px] tablet:h-[252px] tablet:w-[321px] desktop:w-auto overflow-auto">
        {progress && percentOfReading > 0 && (
          <CircleCharts percentage={percentOfReading} />
        )}
        {maxPages > 0 && (
          <p className="flex text-tiny mx-auto">
            {maxPages > 1 ? maxPages : ">1"} pages read
          </p>
        )}
      </div>
    </div>
  );
};

export default Statistic;
