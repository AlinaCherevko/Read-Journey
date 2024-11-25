export interface IBooksState {
  recommended: IRecommendedBooks;
  booksInLibrary: IBookLibrary[];
  currentBook: IBookLibrary | null;
  error: string | undefined;
  isLoading: boolean;
  isRefreshing: boolean;
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
  status: Status;
  owner: string;
  progress: IProgress[];
  timeLeftToRead?: ITime;
}

export interface IIdBook {
  id: string;
}
export interface IOwnBook {
  title: string;
  author: string;
  totalPages: number;
}

export interface ISessionReading {
  bookId: string;
  readingId: string;
}

export enum Status {
  UNREAD = "unread",
  INPROGRESS = "in-progress",
  DONE = "done",
}

export interface IBookRemove {
  id: string;
  message: string;
}

export enum CurrentStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}
export interface IProgress {
  startPage: number;
  startReading: string;
  finishPage: number;
  finishReading: string;
  speed: number;
  status: CurrentStatus;
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
