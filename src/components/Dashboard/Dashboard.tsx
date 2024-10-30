import { FC } from "react";
import Input from "../FilterInput/FilterInput";
import Button from "../Button/Button";

const Dashboard: FC = () => {
  return (
    <div className="bg-gray-bg-color w-full rounded-lg p-5 tablet:p-8 desktop:p-5 desktop:pt-10">
      <span className="text-tiny text-primary-white mb-2 ml-3.5 tablet:text-small">
        Filters:
      </span>
      <div className="flex flex-col gap-2 mb-5">
        <Input placeholder="Enter text" text="Book title:" />
        <Input placeholder="Enter text" text="The author:" />
      </div>
      <Button text="To apply" type="submit" />
    </div>
  );
};

export default Dashboard;
