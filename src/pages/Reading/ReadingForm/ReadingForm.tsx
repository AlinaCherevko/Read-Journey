import { FC, useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
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
import { CurrentStatus } from "../../../redux/books/types";
import { useTranslation } from "react-i18next";
import { useSchemaReadingBook } from "../../../hooks/schemas";

const ReadingForm: FC = () => {
  const { t } = useTranslation();
  const schemaReadingBook = useSchemaReadingBook();
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [page, setPage] = useState<number | null>(null);
  const error = useSelector(selectBookError);
  const currentBook = useSelector(selectCurrentBook);
  const status =
    currentBook?.progress?.[currentBook.progress.length - 1]?.status;
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (!isFirstRender) {
      if (error) {
        toast.error(error);
        return;
      }
    }
  }, [error, isFirstRender]);

  useEffect(() => {
    if (currentBook && page !== null) {
      if (status === CurrentStatus.ACTIVE) {
        dispatch(stopReadBook({ id: currentBook._id, page }));
        if (error) return;
      }
      if (status === CurrentStatus.INACTIVE || !status) {
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
    setIsFirstRender(false);
    if (currentBook && data.pages > currentBook?.totalPages) {
      toast.error(t("exceed_total_pages"));
      reset();
      return;
    }
    setPage(Number(data.pages));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <FormInput
        text={t("Page number")}
        label="pages"
        placeholder="0"
        error={errors.pages}
        register={register}
      />
      <Button
        type="submit"
        text={status === CurrentStatus.ACTIVE ? t("To stop") : t("To start")}
      />
    </form>
  );
};

export default ReadingForm;
