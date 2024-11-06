export type FormValues = {
  name: string;
  email: string;
  password: string;
};
export type LoginValues = Omit<FormValues, "name">;

export type AddBookValues = {
  title: string;
  author: string;
  pages: number;
};

export type ReadBookValues = {
  pages: number;
};
