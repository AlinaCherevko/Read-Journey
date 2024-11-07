export interface IBooksState {
  recommended: IRecommendedBooks;
  inLibrary: IBookLibrary[];
  currentBook: IBookLibrary | null;
  error: string | undefined;
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
  status: "unread" | "in-progress" | "done";
  owner: string;
  progress: IProgress[];
  timeLeftToRead?: ITime;
}

export interface IIdBook {
  id: string;
}

export interface IBookRemove {
  id: string;
  message: string;
}

export interface IProgress {
  startPage: number;
  startReading: string;
  finishPage: number;
  finishReading: string;
  speed: number;
  status: string;
  _id: string;
}

export interface IStartRead extends IIdBook {
  page: number;
}

export interface ITime {
  hours: number;
  minutes: number;
  seconds: number;
}
