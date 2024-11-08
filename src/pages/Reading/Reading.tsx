import { FC } from "react";
import ReadingDashboard from "./ReadingDashboard/ReadingDashboard";
import BookSection from "./BookSection/BookSection";

const Reading: FC = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="mt-3 desktop:mt-4 flex flex-col gap-2.5 tablet:gap-4 desktop:flex-row pb-5">
          <ReadingDashboard />
          <BookSection />
        </div>
      </div>
    </section>
  );
};

export default Reading;
