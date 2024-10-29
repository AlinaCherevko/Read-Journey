import { FC } from "react";
import Button from "../../../components/Button/Button";

const LoginForm: FC = () => {
  return (
    <form>
      <Button text="Log In" type="submit" />
      <a>Don't have an account ?</a>
    </form>
  );
};

export default LoginForm;
