import { FC } from "react";
import FilterInput from "../FilterInput/FilterInput";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export type DashBoardProps = {
  setTitle: (params: string) => void;
  setAuthor: (params: string) => void;
  // setAuthor: React.Dispatch<React.SetStateAction<string>>;
  // setTitle: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  title?: string;
  author?: string;
};

const Dashboard: FC<DashBoardProps> = ({
  setTitle,
  setAuthor,
  setPage,
  title,
  author,
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-bg-color w-full rounded-lg p-5 tablet:p-8 desktop:p-5 desktop:pt-10 desktop:w-[353px]">
      <p className="text-tiny text-primary-white mb-3 ml-3.5 tablet:text-small">
        {t("filters")}
      </p>
      <div className="flex flex-col gap-4 tablet:gap-5 mb-5">
        <FilterInput
          placeholder={t("Enter text")}
          text={t("Book title:")}
          setOption={setTitle}
          option={title}
          setPage={setPage}
        />
        <FilterInput
          placeholder={t("Enter text")}
          text={t("Book author:")}
          setOption={setAuthor}
          option={author}
          setPage={setPage}
        />
      </div>

      <div className="p-5 bg-light-bg-color rounded-md">
        <h2 className="text-mediumSmall text-primary-white font-bold mb-5 desktop:mb-10">
          {t("Start your workout")}
        </h2>
        <ul className="flex flex-col gap-5 mb-5">
          <li className="flex gap-3.5">
            <div className="flex items-center justify-center w-10 desktop:w-11 h-10 desktop:h-11 rounded-full bg-primary-white text-mediumSmall text-primary-black font-bold shrink-0">
              1
            </div>
            <div>
              <span className="text-primary-white text-small">
                {t("Create a personal library")}
              </span>
              <p className="text-small">
                {t("Add the books you intend to read it")}
              </p>
            </div>
          </li>
          <li className="flex gap-3.5">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-white text-mediumSmall text-primary-black font-bold shrink-0">
              2
            </div>
            <div>
              <span className="text-primary-white text-small">
                {t("Create your first workout")}
              </span>
              <p className="text-small">
                {t("Define a goal, choose a period, start training")}
              </p>
            </div>
          </li>
        </ul>
        <Link
          className="text-small underline cursor-pointer hover:text-primary-white"
          to={"/library"}
        >
          {t("library")}
        </Link>
      </div>
      <div className="hidden desktop:flex gap-3.5 bg-light-bg-color mt-5 p-5 rounded-md">
        <img src="/books.png" alt="book-q" />
        <div className="text-small items-center">
          {t("Books are")} {""}
          <span className="text-small text-primary-white">{t("windows")} </span>
          {t("to the world, and reading is a journey into the unknown")}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
