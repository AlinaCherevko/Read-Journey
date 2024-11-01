import { FC, useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import FormInput from "../../../components/FormInput/FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginValues } from "../../RegisterPage/RegisterForm/types";
import { Link } from "react-router-dom";
import { schemaLog } from "../../../schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { selectError, selectUser } from "../../../redux/auth/authSelectors";
import { toast } from "react-toastify";
import { logIn } from "../../../redux/auth/authOperations";

const LoginForm: FC = () => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const error = useSelector(selectError);
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector(selectUser);

  console.log(user);

  useEffect(() => {
    if (!isFirstRender) {
      if (user) {
        toast.success("User successfully logged in");
      }
      if (error) {
        toast.error(error as string);
      }
    }
  }, [error, user, isFirstRender]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<LoginValues>({
    resolver: yupResolver(schemaLog),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<LoginValues> = (data) => {
    setIsFirstRender(false);
    dispatch(logIn({ email: data.email, password: data.password }));

    reset();
  };

  const isEmailValid = !errors.email && getValues("email");
  const isPasswordValid = !errors.password && getValues("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3 tablet:gap-4 mb-18 tablet:mb-36.5">
        <FormInput
          success={isEmailValid}
          error={errors.email}
          placeholder="Enter text"
          label="email"
          text="Mail:"
          register={register}
        />
        <FormInput
          success={isPasswordValid}
          error={errors.password}
          placeholder="Enter text"
          label="password"
          text="Password:"
          register={register}
        />
      </div>
      <div className="flex items-center gap-3.5 tablet:gap-5">
        <Button text="Log In" type="submit" />
        <Link
          to={"/register"}
          className="text-lightSmall tablet:text-small underline cursor-pointer hover:text-primary-white"
        >
          Don't have an account ?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
