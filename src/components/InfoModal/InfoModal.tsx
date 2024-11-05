import { FC } from "react";
import { BookProps } from "../../pages/HomePage/BooksItem/types";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectLibrariesBooks } from "../../redux/books/booksSelectors";
import { AppDispatch } from "../../redux/store";
import { addToLibrary } from "../../redux/books/booksOperations";

const InfoModal: FC<BookProps> = ({ result }) => {
  const inLibrary = useSelector(selectLibrariesBooks);
  const dispatch: AppDispatch = useDispatch();

  const isBookInLibrary = inLibrary.some((book) => book._id === result._id);

  const addToLibraryHandler = () => {
    if (isBookInLibrary) {
      return;
    } else {
      dispatch(addToLibrary({ id: result._id }));
    }
  };

  return (
    <div className="w-[280px] h-auto p-10 text-center bg-gray-bg-color rounded-md mobileAdaptive:w-[335px] tablet:w-[500px] tablet:p-[50px]">
      <img
        className="w-[137px] h-[208px] mb-4 mx-auto rounded-sm tablet:w-[153px] tablet:h-[233px]"
        src={result.imageUrl}
        alt="book-rec"
      />
      <h3 className="text-mediumSmall text-primary-white font-bold mb-0.5 tablet:text-lightMedium">
        {result.title}
      </h3>
      <p className="text-lightSmall mb-1 tablet:text-small">{result.author}</p>
      <p className="text-tiny text-primary-white mb-5 tablet:mb-8">
        {result.totalPages} pages
      </p>
      <Button
        type="button"
        text={isBookInLibrary ? "Remove from library" : "Add to library"}
        onClick={addToLibraryHandler}
      />
    </div>
  );
};

export default InfoModal;
