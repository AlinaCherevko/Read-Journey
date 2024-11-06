import { FC } from "react";
import BooksSection from "../HomePage/RecommendedBooks/RecommendedBooks";
import ReadingDashboard from "./ReadingDashboard/ReadingDashboard";

const Reading: FC = () => {
  const pageName = "reading";
  return (
    <section>
      <div className="wrapper">
        <div className="mt-3 desktop:mt-4 flex flex-col gap-2.5 tablet:gap-4 desktop:flex-row pb-5">
          <ReadingDashboard />
          <BooksSection title="In reading" pageName={pageName} />
        </div>
      </div>
    </section>
  );
};

export default Reading;
