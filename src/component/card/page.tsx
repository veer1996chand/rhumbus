import { Card as AntdCard } from "antd";
import "./card.scss";
export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <AntdCard className={className}>{children}</AntdCard>;
}
