import { FC, useState } from "react";
import ReadingDashboard from "./ReadingDashboard/ReadingDashboard";
import BookSection from "./BookSection/BookSection";

const Reading: FC = () => {
  const [status, setStatus] = useState<"start" | "stop">("stop");

  const handleStatusChange = (newStatus: "start" | "stop") => {
    setStatus(newStatus);
  };

  // const pageName = "reading";
  return (
    <section>
      <div className="wrapper">
        <div className="mt-3 desktop:mt-4 flex flex-col gap-2.5 tablet:gap-4 desktop:flex-row pb-5">
          <ReadingDashboard
            handleStatusChange={handleStatusChange}
            status={status}
          />
          <BookSection status={status} />
        </div>
      </div>
    </section>
  );
};

export default Reading;
