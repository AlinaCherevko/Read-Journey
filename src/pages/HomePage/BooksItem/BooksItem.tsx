import { FC, useState } from "react";
import { BookProps } from "./types";
import Modal from "../../../components/Modal/Modal";
import InfoModal from "../../../components/InfoModal/InfoModal";

const BooksItem: FC<BookProps> = ({ result, isHomePage }) => {
  const [isInfoModalVisible, setIsInfoModalVisible] = useState<boolean>(false);

  console.log(isInfoModalVisible);
  return (
    <>
      <div
        className="w-full tablet:w-[137px] h-auto"
        onClick={() => setIsInfoModalVisible(true)}
      >
        <img
          className="w-full tablet:w-[137px] h-[208px] mb-2 rounded-sm"
          src={result.imageUrl}
          alt="book-rec"
        />
        <h3 className="text-small text-primary-white font-bold mb-0.5 whitespace-nowrap overflow-hidden overflow-ellipsis">
          {result.title}
        </h3>
        <p className="text-tiny">{result.author}</p>
      </div>
      {isInfoModalVisible && isHomePage && (
        <Modal onClose={() => setIsInfoModalVisible(false)}>
          <InfoModal result={result} />
        </Modal>
      )}
    </>
  );
};

export default BooksItem;
