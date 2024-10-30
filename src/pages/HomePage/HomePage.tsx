import { FC } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import RecommendedBooks from "./RecommendedBooks/RecommendedBooks";

const HomePage: FC = () => {
  return (
    <section>
      <div className="container1">
        <div className="mt-3 desktop:mt-4 flex flex-col gap-2.5 tablet:gap-4 desktop:flex-row">
          <Dashboard />
          <RecommendedBooks />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
