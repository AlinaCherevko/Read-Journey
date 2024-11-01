import { FC } from "react";
import Input from "../FilterInput/FilterInput";
import Button from "../Button/Button";
import { DashBoardProps } from "./types";

const Dashboard: FC<DashBoardProps> = ({ setTitle, setAuthor, setPage }) => {
  return (
    <div className="bg-gray-bg-color w-full rounded-lg p-5 tablet:p-8 desktop:p-5 desktop:pt-10 desktop:w-[353px]">
      <span className="text-tiny text-primary-white mb-2 ml-3.5 tablet:text-small">
        Filters:
      </span>
      <div className="flex flex-col gap-2 mb-5">
        <Input
          placeholder="Enter text"
          text="Book title:"
          setOption={setTitle}
          setPage={setPage}
        />
        <Input
          placeholder="Enter text"
          text="The author:"
          setOption={setAuthor}
          setPage={setPage}
        />
      </div>
      <Button text="To apply" type="submit" />
    </div>
  );
};

export default Dashboard;
