import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchInput({
  className,
  placeholder = "Search...",
}: {
  className?: string;
  placeholder?: string;
}) {
  return (
    <Input
      placeholder={placeholder}
      className={`search-input ${className}`}
      prefix={<SearchOutlined className="site-form-item-icon" />}
    />
  );
}
