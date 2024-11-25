import { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <Link to="/" className="flex gap-1">
      <img src="/logo.svg" alt="logo-img" className="cursor-pointer" />
      <span className="hidden desktop:block text-primary-white cursor-pointer">
        READ JOURNEY
      </span>
    </Link>
  );
};

export default Logo;
