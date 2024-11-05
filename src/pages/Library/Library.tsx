import { FC, useState } from "react";
import { selectLibrariesBooks } from "../../redux/books/booksSelectors";
import { useSelector } from "react-redux";
import LibraryDashboard from "./LibraryDashboard/LibraryDasboard";
import BooksSection from "../HomePage/RecommendedBooks/RecommendedBooks";

const Library: FC = () => {
  const [page, setPage] = useState(1);
  const libraryItems = useSelector(selectLibrariesBooks);
  console.log(libraryItems);
  return (
    <section>
      <div className="wrapper">
        <div className="mt-3 desktop:mt-4 flex flex-col gap-2.5 tablet:gap-4 desktop:flex-row pb-5">
          <LibraryDashboard />
          <BooksSection
            setPage={setPage}
            page={page}
            items={libraryItems}
            title="My library"
          />
        </div>
      </div>
    </section>
  );
};

export default Library;
