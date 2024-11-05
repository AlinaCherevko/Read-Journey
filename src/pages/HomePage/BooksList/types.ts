import { IBook, IBookLibrary } from "../../../redux/books/types";

export type BooksListProps = {
  results: IBook[] | IBookLibrary[];
  isHomePage?: boolean;
};
