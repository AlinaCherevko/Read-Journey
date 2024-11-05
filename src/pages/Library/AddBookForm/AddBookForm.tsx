import { FC } from "react";
import FormInput from "../../../components/FormInput/FormInput";
import Button from "../../../components/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { schemaAddBook } from "../../../schemas/schemas";
import { AddBookValues } from "../../RegisterPage/RegisterForm/types";

const AddBookForm: FC = () => {
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
    console.log(data);
    reset();
  };

  const isTitleValid = !errors.title && getValues("title");
  const isAuthorValid = !errors.author && getValues("author");
  const isPagesValid = !errors.pages && getValues("pages");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 mb-5"
    >
      <FormInput
        placeholder="Enter text"
        text="Book title:"
        error={errors.title}
        label="title"
        register={register}
        success={isTitleValid}
      />
      <FormInput
        placeholder="Enter text"
        text="The author:"
        error={errors.author}
        label="author"
        register={register}
        success={isAuthorValid}
      />
      <FormInput
        placeholder="0"
        text="Number of pages:"
        error={errors.pages}
        label="pages"
        register={register}
        success={isPagesValid}
      />
      <Button text="Add book" type="submit" />
    </form>
  );
};

export default AddBookForm;
