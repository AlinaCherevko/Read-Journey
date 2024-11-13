import { FC } from "react";
import AddBookForm from "../AddBookForm/AddBookForm";
import LibraryRecommended from "../LibraryRecommended/LibraryRecommended";

const LibraryDashboard: FC = () => {
  return (
    <div className="bg-gray-bg-color w-full rounded-lg p-5 tablet:p-8 desktop:p-5 desktop:pt-10 desktop:w-[353px]">
      <div className="flex flex-col tablet:flex-row desktop:flex-col gap-5 tablet:gap-8 desktop:gap-20">
        <AddBookForm />
        <LibraryRecommended />
      </div>
    </div>
  );
};

export default LibraryDashboard;
