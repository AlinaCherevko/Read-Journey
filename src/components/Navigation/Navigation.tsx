import { FC } from "react";

import NavTab from "../NavTab/NavTab";
import { useTranslation } from "react-i18next";

const Navigation: FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden tablet:flex gap-x-10 ">
      <NavTab to="/" text={t("home")} />
      <NavTab to="/library" text={t("library")} />
      <NavTab to="/reading" text={t("reading")} />
    </nav>
  );
};

export default Navigation;
