import { Button as AntdButton } from "antd";

export default function Button(
  {},
  {
    children,
    ...rest
  }: {
    children: React.ReactNode;
  }
) {
  return <AntdButton {...rest}>{children}</AntdButton>;
}
