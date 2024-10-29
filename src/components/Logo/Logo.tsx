import { FC } from "react";

const Logo: FC = () => {
  return (
    <a href="/" className="flex gap-1">
      <img src="/public/logo.svg" alt="logo-img" className="cursor-pointer" />
      <span className="hidden desktop:block text-primary-white cursor-pointer">
        READ JOURNEY
      </span>
    </a>
  );
};

export default Logo;
