import { FC, useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { schemaReadingBook } from "../../../schemas/schemas";
import { ReadBookValues } from "../../RegisterPage/RegisterForm/types";
import FormInput from "../../../components/FormInput/FormInput";
import {
  startReadBook,
  stopReadBook,
} from "../../../redux/books/booksOperations";
import {
  selectBookError,
  selectCurrentBook,
} from "../../../redux/books/booksSelectors";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { toast } from "react-toastify";

const ReadingForm: FC = () => {
  const [page, setPage] = useState<number | null>(null);
  const error = useSelector(selectBookError);
  const currentBook = useSelector(selectCurrentBook);
  const status =
    currentBook?.progress?.[currentBook.progress.length - 1]?.status;
  const dispatch: AppDispatch = useDispatch();
  console.log(error);
  console.log(status);
  console.log(page);

  useEffect(() => {
    if (error) {
      toast.error(error);
      return;
    }
    if (!error) {
      if (status === "inactive") toast.success("Reading stopped successfully");

      if (status === "active") toast.success("Reading started successfully");
    }
  }, [error, status]);

  useEffect(() => {
    if (currentBook && page !== null) {
      if (status === "active") {
        dispatch(stopReadBook({ id: currentBook._id, page }));
        if (error) return;
      }
      if (status === "inactive") {
        dispatch(startReadBook({ id: currentBook._id, page }));
        if (error) return;
      }

      setPage(null);
    }
  }, [page, currentBook, dispatch, status, error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReadBookValues>({
    resolver: yupResolver(schemaReadingBook),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<ReadBookValues> = (data) => {
    setPage(Number(data.pages));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <FormInput
        text="Page number:"
        label="pages"
        placeholder="0"
        error={errors.pages}
        register={register}
      />
      <Button
        type="submit"
        text={status === "active" ? "To stop" : "To start"}
      />
    </form>
  );
};

export default ReadingForm;
