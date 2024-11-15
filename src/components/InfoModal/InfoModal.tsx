import { FC } from "react";
import { BookProps } from "../../pages/HomePage/BooksItem/types";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  addToLibrary,
  getCurrentBook,
} from "../../redux/books/booksOperations";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const InfoModal: FC<BookProps> = ({ result, isInLibrary, pageName }) => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const addToLibraryHandler = () => {
    dispatch(addToLibrary({ id: result._id }));
  };

  const handleStartReadingBook = () => {
    dispatch(getCurrentBook({ id: result._id }));
    navigate("/reading");
  };

  return (
    <div className="w-[280px] h-auto p-10 text-center bg-gray-bg-color rounded-md mobileAdaptive:w-[335px] tablet:w-[500px] tablet:p-[50px]">
      <img
        className="w-[137px] h-[208px] mb-4 mx-auto rounded-sm tablet:w-[153px] tablet:h-[233px]"
        src={
          result.imageUrl
            ? result.imageUrl
            : "https://images.pexels.com/photos/1105564/pexels-photo-1105564.jpeg"
        }
        alt="book-rec"
      />
      <h3 className="text-mediumSmall text-primary-white font-bold mb-0.5 tablet:text-lightMedium">
        {result.title}
      </h3>
      <p className="text-lightSmall mb-1 tablet:text-small">{result.author}</p>
      <p className="text-tiny text-primary-white mb-5 tablet:mb-8">
        {result.totalPages} {t("pages")}
      </p>
      {!isInLibrary && (
        <Button
          type="button"
          text={t("Add to library")}
          onClick={addToLibraryHandler}
        />
      )}
      {pageName === "library" && (
        <Button
          type="button"
          text={t("Start reading")}
          onClick={handleStartReadingBook}
        />
      )}
    </div>
  );
};

export default InfoModal;
