import { FC } from "react";
import Input from "../FilterInput/FilterInput";
import { DashBoardProps } from "./types";
import { Link } from "react-router-dom";

const Dashboard: FC<DashBoardProps> = ({ setTitle, setAuthor, setPage }) => {
  return (
    <div className="bg-gray-bg-color w-full rounded-lg p-5 tablet:p-8 desktop:p-5 desktop:pt-10 desktop:w-[353px]">
      <span className="text-tiny text-primary-white mb-5 ml-3.5 tablet:text-small">
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
      {/* <Button text="To apply" type="submit" /> */}

      <div className="p-5 bg-light-bg-color rounded-md">
        <h2 className="text-mediumSmall text-primary-white font-bold mb-5 desktop:mb-10">
          Start your workout
        </h2>
        <ul className="flex flex-col gap-5 mb-5">
          <li className="flex gap-3.5">
            <div className="flex items-center justify-center w-10 desktop:w-11 h-10 desktop:h-11 rounded-full bg-primary-white text-mediumSmall text-primary-black font-bold shrink-0">
              1
            </div>
            <div>
              <span className="text-primary-white text-small">
                Create a personal library:{" "}
              </span>
              <p className="text-small">
                add the books you intend to read to it.
              </p>
            </div>
          </li>
          <li className="flex gap-3.5">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-white text-mediumSmall text-primary-black font-bold shrink-0">
              2
            </div>
            <div>
              <span className="text-primary-white text-small">
                Create your first workout:{" "}
              </span>
              <p className="text-small">
                define a goal, choose a period, start training.
              </p>
            </div>
          </li>
        </ul>
        <Link
          className="text-small underline cursor-pointer hover:text-primary-white"
          to={"/library"}
        >
          My library
        </Link>
      </div>
      <div className="hidden desktop:flex gap-3.5 bg-light-bg-color mt-5 p-5 rounded-md">
        <img src="../../../public/books.png" alt="book-q" />
        <div className="text-small items-center">
          "Books are{" "}
          <span className="text-small text-primary-white">windows </span>to the
          world, and reading is a journey into the unknown."
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
