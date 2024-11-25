import { FC } from "react";
import FormInput from "../../../components/FormInput/FormInput";
import Button from "../../../components/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddBookValues } from "../../RegisterPage/RegisterForm/types";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { addOwnBook } from "../../../redux/books/booksOperations";
import { useTranslation } from "react-i18next";
import { useSchemaAddBook } from "../../../hooks/schemas";

const AddBookForm: FC = () => {
  const { t } = useTranslation();
  const schemaAddBook = useSchemaAddBook();
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
    <div>
      <p className="text-tiny text-primary-white ml-3.5 tablet:text-small mb-3">
        {t("Create your library")}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 tablet:gap-5">
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
        </div>
        <div className="mt-5">
          <Button text={t("Add book")} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
