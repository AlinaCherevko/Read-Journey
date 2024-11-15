import { FC, useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import { SwitchCheckedChangeDetails } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const LangSwitcher: FC = () => {
  const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation();

  const handleSwitch = (e: SwitchCheckedChangeDetails) => {
    setLanguage(e.checked ? "en" : "uk");
    // i18n.changeLanguage(language);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  return (
    <>
      <Switch
        label="111"
        color="gray"
        size="lg"
        defaultChecked
        onCheckedChange={handleSwitch}
        trackLabel={{
          on: <span className="text-primary-white">EN</span>,
          off: <span className="text-primary-black">UK</span>,
        }}
      />
    </>
  );
};

export default LangSwitcher;
