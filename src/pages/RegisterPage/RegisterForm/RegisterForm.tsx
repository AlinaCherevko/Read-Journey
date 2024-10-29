import { FC } from "react";
import Button from "../../../components/Button/Button";

const RegisterForm: FC = () => {
  return (
    <form>
      <Button text="Registration" type="submit" />
      <a>Already have an account ?</a>
    </form>
  );
};

export default RegisterForm;
