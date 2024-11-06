import { FC } from "react";
import Button from "../../../components/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { schemaReadingBook } from "../../../schemas/schemas";
import { ReadBookValues } from "../../RegisterPage/RegisterForm/types";
import FormInput from "../../../components/FormInput/FormInput";

const ReadingForm: FC = () => {
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
    console.log(data);
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
      <Button type="submit" text="To start" />
    </form>
  );
};

export default ReadingForm;
