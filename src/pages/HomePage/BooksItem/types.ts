import { IBook, IBookLibrary } from "../../../redux/books/types";

export type BookProps = {
  result: IBook | IBookLibrary;
  pageName?: "home" | "library" | "reading" | undefined;
  isInLibrary?: boolean;
};
