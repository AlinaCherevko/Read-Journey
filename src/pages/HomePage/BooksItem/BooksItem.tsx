import { FC, useState, memo } from "react";
import { BookProps } from "./types";
import Modal from "../../../components/Modal/Modal";
import InfoModal from "../../../components/InfoModal/InfoModal";
import { useDispatch, useSelector } from "react-redux";
import { selectLibrariesBooks } from "../../../redux/books/booksSelectors";
import Icon from "../../../components/Icon/Icon";
import { AppDispatch } from "../../../redux/store";
import { deleteFromLibrary } from "../../../redux/books/booksOperations";
import { IBookLibrary } from "../../../redux/books/types";

const BooksItem: FC<BookProps> = ({ result, pageName }) => {
  const [isInfoModalVisible, setIsInfoModalVisible] = useState<boolean>(false);
  const inLibrary = useSelector(selectLibrariesBooks);
  const dispatch: AppDispatch = useDispatch();

  const isInLibrary = inLibrary.some(
    (book: IBookLibrary) => book.title === result.title
  );

  const handleDeleteFromLibrary = () => {
    dispatch(deleteFromLibrary({ id: result._id }));
    setIsInfoModalVisible(false);
  };

  return (
    <>
      <div
        className="w-full tablet:w-[137px] h-auto"
        onClick={() => setIsInfoModalVisible(true)}
      >
        <img
          className="w-full tablet:w-[137px] h-[208px] mb-2 rounded-sm"
          src={
            result.imageUrl
              ? result.imageUrl
              : "https://images.pexels.com/photos/1105564/pexels-photo-1105564.jpeg"
          }
          alt="book-rec"
        />
        <div className="flex items-center justify-between">
          <div className="w-[80px] tablet:w-[100px]">
            <h3 className="text-small text-primary-white font-bold mb-0.5 whitespace-nowrap overflow-hidden overflow-ellipsis">
              {result.title}
            </h3>
            <p className="text-tiny">{result.author}</p>
          </div>
          {isInLibrary && pageName === "library" && (
            <div
              onClick={handleDeleteFromLibrary}
              className="cursor-pointer flex items-center justify-center w-7 h-7 rounded-full border border-red-bg-transparent hover:bg-red-bg-transparent"
            >
              <Icon
                stroke="#E85050"
                fill="transparent"
                id="icon-trash"
                width="16px"
                height="16px"
              />
            </div>
          )}
        </div>
      </div>
      {isInfoModalVisible && (
        <Modal onClose={() => setIsInfoModalVisible(false)}>
          <InfoModal
            result={result}
            isInLibrary={isInLibrary}
            pageName={pageName}
          />
        </Modal>
      )}
    </>
  );
};

export default memo(BooksItem);
