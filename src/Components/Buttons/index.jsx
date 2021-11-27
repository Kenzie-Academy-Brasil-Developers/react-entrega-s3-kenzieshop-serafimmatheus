import { Buttons } from "./style";

export const Button = ({ children, ...rest }) => {
  return <Buttons {...rest}>{children}</Buttons>;
};
