import { FC, useState } from "react";
import Diary from "../Diary/Diary";
import Statistic from "../Statistic/Statistic";

const Details: FC = () => {
  const [activeTab, setActiveTab] = useState<"Diary" | "Statistic">("Diary");

  const handleTabChange = (tab: "Diary" | "Statistic") => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-10 tablet:mt-0 flex flex-col gap-4">
      <div className="flex gap-4 ">
        <a
          className={
            activeTab === "Statistic"
              ? "text-mediumSmall font-bold tablet:text-lightMedium cursor-pointer"
              : "text-primary-white text-mediumSmall font-bold tablet:text-lightMedium cursor-pointer"
          }
          onClick={() => handleTabChange("Diary")}
        >
          Diary
        </a>
        <a
          className={
            activeTab === "Diary"
              ? "text-mediumSmall font-bold tablet:text-lightMedium cursor-pointer"
              : "text-primary-white text-mediumSmall font-bold tablet:text-lightMedium cursor-pointer"
          }
          onClick={() => handleTabChange("Statistic")}
        >
          Statistic
        </a>
      </div>
      {activeTab === "Diary" && <Diary />}
      {activeTab === "Statistic" && <Statistic />}
    </div>
  );
};

export default Details;
