import { FC } from "react";
import ReadingDashboard from "./ReadingDashboard/ReadingDashboard";
import BookSection from "./BookSection/BookSection";

const Reading: FC = () => {
  return (
    <section className="pt-3 desktop:pt-4 pb-5">
      <div className="wrapper">
        <div className="flex flex-col gap-2.5 tablet:gap-4 desktop:flex-row">
          <ReadingDashboard />
          <BookSection />
        </div>
      </div>
    </section>
  );
};

export default Reading;
