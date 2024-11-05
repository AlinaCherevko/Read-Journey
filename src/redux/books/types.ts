export interface IBooksState {
  recommended: IRecommendedBooks;
  inLibrary: IBookLibrary[];
  isError: boolean;
  isLoading: boolean;
}

export interface IBook {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend: boolean;
}

export interface IRecommendedBooks {
  results: IBook[];
  totalPages: number;
}

export interface IRecommendedReq {
  page: number;
  title?: string;
  author?: string;
}

export interface IBookLibrary {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  status: "unread" | "in-progress";
  owner: string;
  progress: [];
}

export interface IIdBook {
  id: string;
}
