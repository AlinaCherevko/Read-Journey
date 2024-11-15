import { FC } from "react";
import FormInput from "../../../components/FormInput/FormInput";
import Button from "../../../components/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { schemaAddBook } from "../../../schemas/schemas";
import { AddBookValues } from "../../RegisterPage/RegisterForm/types";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { addOwnBook } from "../../../redux/books/booksOperations";
import { useTranslation } from "react-i18next";

const AddBookForm: FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<AddBookValues>({
    resolver: yupResolver(schemaAddBook),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<AddBookValues> = (data) => {
    dispatch(
      addOwnBook({
        title: data.title,
        author: data.author,
        totalPages: data.pages,
      })
    );
    reset();
  };

  const isTitleValid = !errors.title && getValues("title");
  const isAuthorValid = !errors.author && getValues("author");
  const isPagesValid = !errors.pages && getValues("pages");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 tablet:gap-3.5"
    >
      <span className="text-tiny text-primary-white ml-3.5 tablet:text-small">
        {t("Create your library")}
      </span>
      <FormInput
        placeholder={t("Enter text")}
        text={t("Book title:")}
        error={errors.title}
        label="title"
        register={register}
        success={isTitleValid}
      />
      <FormInput
        placeholder={t("Enter text")}
        text={t("Book author:")}
        error={errors.author}
        label="author"
        register={register}
        success={isAuthorValid}
      />
      <FormInput
        placeholder="0"
        text={t("Number of pages:")}
        error={errors.pages}
        label="pages"
        register={register}
        success={isPagesValid}
      />
      <Button text={t("Add book")} type="submit" />
    </form>
  );
};

export default AddBookForm;
