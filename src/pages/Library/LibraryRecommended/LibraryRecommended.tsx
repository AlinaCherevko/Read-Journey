import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectRecommendedBooks } from "../../../redux/books/booksSelectors";

const LibraryRecommended: FC = () => {
  const recommendedBooks = useSelector(selectRecommendedBooks);
  const booksToShow = recommendedBooks.results.slice(0, 3);
  return (
    <div className="bg-light-bg-color rounded-md p-5 ">
      <h2 className="text-mediumSmall text-primary-white font-bold mb-3.5 tablet:mb-5 tablet:text-lightMedium">
        Recommended books
      </h2>
      <ul className="flex justify-between mobileAdaptive:gap-5 mb-4">
        {booksToShow.map((item) => (
          <li
            key={item._id}
            className="w-[60px] flex flex-col h-min-[141px] mobileAdaptive:w-[71px] "
          >
            <img
              src={item.imageUrl}
              alt="photo-lib"
              className="w-[60px] h-[98px] mobileAdaptive:w-[71px] mobileAdaptive:h-[107px] rounded-sm mb-2"
            />
            <h3 className="text-tiny text-primary-white font-bold mb-0.5 whitespace-nowrap overflow-hidden overflow-ellipsis">
              {item.author}
            </h3>
            <p className=" text-tiny  whitespace-nowrap overflow-hidden overflow-ellipsis">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
      <Link
        className="text-small underline cursor-pointer hover:text-primary-white"
        to={"/"}
      >
        Home
      </Link>
    </div>
  );
};

export default LibraryRecommended;
