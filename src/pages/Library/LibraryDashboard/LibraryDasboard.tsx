import { FC } from "react";
import AddBookForm from "../AddBookForm/AddBookForm";

const LibraryDashboard: FC = () => {
  return (
    <div className="bg-gray-bg-color w-full rounded-lg p-5 tablet:p-8 desktop:p-5 desktop:pt-10 desktop:w-[353px]">
      <span className="text-tiny text-primary-white mb-5 ml-3.5 tablet:text-small">
        Filters:
      </span>
      <AddBookForm />
    </div>
  );
};

export default LibraryDashboard;
