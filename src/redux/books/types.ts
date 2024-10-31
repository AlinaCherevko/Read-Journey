export interface IBooksState {
  recommended: IRecommendedBooks;

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
