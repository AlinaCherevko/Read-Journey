import { FC } from "react";
import Logo from "../../components/Logo/Logo";
import RegisterForm from "./RegisterForm/RegisterForm";
import BgImage from "../LoginPage/BgImage/BgImage";

const RegisterPage: FC = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col gap-2.5 desktop:flex-row desktop:gap-4 ">
          <div className="bg-gray-bg-color rounded-lg p-5 pb-10 tablet:pb-53.5 tablet:pt-10 tablet:pl-16 mt-5 tablet:pr-42 desktop:mt-8 desktop:pb-10 desktop:pr-16">
            <Logo />
            <div className="mt-10 mb-5 tablet:mt-40 tablet:mb-10 desktop:mt-27">
              <h1 className="inline text-large tablet:text-extraLarge font-bold text-primary-white mr-2">
                Expand your mind, reading
              </h1>
              <span className="inline text-large tablet:text-extraLarge font-bold text-dark-text-color">
                a book
              </span>
            </div>
            <RegisterForm />
          </div>
          <BgImage />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
