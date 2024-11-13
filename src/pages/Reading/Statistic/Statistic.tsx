import { FC, useEffect, useState } from "react";
import CircleCharts from "../CircleCharts/CircleCharts";
import { useSelector } from "react-redux";
import { selectCurrentBook } from "../../../redux/books/booksSelectors";

const Statistic: FC = () => {
  const [percentOfReading, setPercentOfReading] = useState(0);
  const currentBook = useSelector(selectCurrentBook);
  const progress = currentBook?.progress;
  const totalPages = currentBook?.totalPages;

  useEffect(() => {
    if (!progress) return;
    const maxPage = progress
      ? Math.max(...progress.map((item) => item.finishPage))
      : null;
    if (maxPage && totalPages)
      setPercentOfReading(Math.floor((maxPage / totalPages) * 100));
  }, [progress, totalPages]);

  console.log(percentOfReading);
  return (
    <div>
      <p className="hidden desktop:flex desktop:text-small mb-5">
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </p>
      <div className=" bg-light-bg-color rounded-md flex flex-col justify-center items-center gap-3.5 h-[211px] tablet:h-[252px] tablet:w-[321px] desktop:w-auto overflow-auto">
        {progress && <CircleCharts percentage={percentOfReading} />}
      </div>
    </div>
  );
};

export default Statistic;
