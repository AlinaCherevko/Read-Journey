import { FC } from "react";
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
import { selectCurrentBook } from "../../../redux/books/booksSelectors";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";

type ReadingFormProps = {
  text: string;
  handleStatusChange: (props: "stop" | "start") => void;
  status: "stop" | "start";
};

const ReadingForm: FC<ReadingFormProps> = ({
  text,
  handleStatusChange,
  status,
}) => {
  const currentBook = useSelector(selectCurrentBook);
  const dispatch: AppDispatch = useDispatch();

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
    if (status === "stop" && currentBook) {
      dispatch(startReadBook({ id: currentBook._id, page: data.pages }));
      handleStatusChange("start");
    }
    if (status === "start" && currentBook) {
      dispatch(stopReadBook({ id: currentBook._id, page: data.pages }));
      handleStatusChange("stop");
    }

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
      <Button type="submit" text={text} />
    </form>
  );
};

export default ReadingForm;
