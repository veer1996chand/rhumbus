import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchInput({ className }: { className: string }) {
  return (
    <Input
      placeholder="Search..."
      className={className}
      prefix={<SearchOutlined className="site-form-item-icon" />}
    />
  );
}
