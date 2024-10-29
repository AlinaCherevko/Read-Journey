import { FC } from "react";
import { Oval } from "react-loader-spinner";

const Loader: FC = () => (
  <Oval
    visible={true}
    height="80"
    width="80"
    color=""
    ariaLabel="oval-loading"
    wrapperStyle={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
    wrapperClass=""
  />
);

export default Loader;
