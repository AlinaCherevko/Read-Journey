import { FC } from "react";
import Logo from "../../components/Logo/Logo";
import LoginForm from "./LoginForm/LoginForm";
import BgImage from "./BgImage/BgImage";
import LangSwitcher from "../../components/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";

const LoginPage: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5 tablet:py-8">
      <div className="wrapper">
        <div className="flex flex-col gap-2.5 desktop:flex-row desktop:gap-4">
          <div className="bg-gray-bg-color rounded-lg p-5 pb-10 tablet:pb-53.5 tablet:pt-10 tablet:pl-16 tablet:pr-42 desktop:pr-16 desktop:w-[600px] desktop:pb-10 desktop:h-[736px]">
            <div className="flex justify-between items-center">
              <Logo />
              <LangSwitcher />
            </div>
            <div className="mt-10 mb-5 tablet:mt-40 tablet:mb-9 desktop:mt-27">
              <h1 className="inline text-large tablet:text-extraLarge font-bold text-primary-white mr-2">
                {t("Expand your mind, reading")}
              </h1>
              <span className="inline text-large tablet:text-extraLarge font-bold text-dark-text-color">
                {t("book")}
              </span>
            </div>
            <LoginForm />
          </div>
          <BgImage />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
