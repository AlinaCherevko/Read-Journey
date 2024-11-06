import type { FC } from "react";
import sprite from "/symbol-defs.svg";
import { IconProps } from "./types";

const Icon: FC<IconProps> = ({ id, fill, stroke, width, height }) => {
  return (
    <svg
      className="svg"
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use href={`${sprite}#${id}`}></use>
    </svg>
  );
};

export default Icon;
