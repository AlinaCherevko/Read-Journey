import { FC } from "react";
import { useSelector } from "react-redux";
import { selectCurrentBook } from "../../../redux/books/booksSelectors";
import { CurrentStatus } from "../../../redux/books/types";
import { useTranslation } from "react-i18next";

const BookSection: FC = () => {
  const { t } = useTranslation();
  const currentBook = useSelector(selectCurrentBook);
  const status =
    currentBook?.progress?.[currentBook.progress.length - 1]?.status;

  return (
    <div className="bg-gray-bg-color rounded-lg px-5 py-10 tablet:px-10 shrink-0 desktop:w-[847px] desktop:min-h-[660px] desktop:pb-7">
      <div className="">
        <h1 className="text-primary-white text-big font-bold  tablet:text-lightLarge">
          {t("reading")}
        </h1>
        {currentBook && (
          <div className="mt-10 tablet:mt-8 text-center desktop:mt-11">
            <img
              className="w-[137px] h-[208px] mb-4 mx-auto rounded-sm tablet:w-[169px] tablet:h-[256px] desktop:w-[224px] desktop:h-[340px]"
              src={
                currentBook.imageUrl
                  ? currentBook.imageUrl
                  : "https://images.pexels.com/photos/1105564/pexels-photo-1105564.jpeg"
              }
              alt="book-rec"
            />
            <h3 className="text-mediumSmall text-primary-white font-bold mb-0.5 tablet:text-lightMedium">
              {currentBook.title}
            </h3>
            <p className="text-lightSmall mb-1 tablet:text-small">
              {currentBook.author}
            </p>
            <p className="text-tiny text-primary-white mb-5 tablet:mb-8">
              {currentBook.totalPages} {t("pages")}
            </p>
            <button>
              <img
                className="w-10 h-10 tablet:w-[50px] tablet:h-[50px]"
                src={
                  status === CurrentStatus.INACTIVE || !status
                    ? "/btn-start.png"
                    : "/btn-stop.png"
                }
                alt="button-read"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookSection;
