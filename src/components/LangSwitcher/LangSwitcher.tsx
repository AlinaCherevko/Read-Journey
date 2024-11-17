import { FC, useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import { SwitchCheckedChangeDetails } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const LangSwitcher: FC = () => {
  const [language, setLanguage] = useState<string | null>(
    localStorage.getItem("i18nextLng") || null
  );
  const { i18n } = useTranslation();
  console.log(language);

  const handleSwitch = (e: SwitchCheckedChangeDetails) => {
    setLanguage(e.checked ? "uk" : "en");
  };

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
      localStorage.setItem("i18nextLng", language);
    }
  }, [language, i18n]);
  return (
    <>
      <Switch
        label="111"
        color="gray"
        size="lg"
        checked={language === "uk"}
        onCheckedChange={handleSwitch}
        trackLabel={{
          on: <span className="text-primary-white">UK</span>,
          off: <span className="text-primary-black">EN</span>,
        }}
      />
    </>
  );
};

export default LangSwitcher;
