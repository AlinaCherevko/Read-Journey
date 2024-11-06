import { FC } from "react";

import NavTab from "../NavTab/NavTab";

const Navigation: FC = () => {
  return (
    <nav className="hidden tablet:flex gap-x-10 ">
      <NavTab to="/" text="Home" />
      <NavTab to="/library" text="My library" />
      <NavTab to="/reading" text="My reading" />
    </nav>
  );
};

export default Navigation;
