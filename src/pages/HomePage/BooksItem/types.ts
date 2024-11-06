import { IBook, IBookLibrary } from "../../../redux/books/types";

export type BookProps = {
  result: IBook | IBookLibrary;
  isHomePage?: boolean;
  isInLibrary?: boolean;
};
