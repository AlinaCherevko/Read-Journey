import { FC } from "react";
import Logo from "../../components/Logo/Logo";
import RegisterForm from "./RegisterForm/RegisterForm";

const RegisterPage: FC = () => {
  return (
    <section>
      <div className="container">
        <div className="bg-gray-bg-color rounded-lg p-5 tablet:pt-10 tablet:pl-16 mt-5 tablet:pr-42 ">
          <Logo />
          <div className="mt-10 mb-5 tablet:mt-40 tablet:mb-10">
            <h1 className="text-large tablet:text-extraLarge font-bold text-primary-white">
              Expand your mind, reading
            </h1>
            <span className="text-large tablet:text-extraLarge font-bold text-dark-text-color">
              a book
            </span>
          </div>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
