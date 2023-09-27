"use client";
import { Select as AntdSelect } from "antd";

export default function Select({
  showSearch,
  className,
  placeholder,
  style,
  options,
  defaultValue,
  bordered,
  ...rest
}: {
  showSearch?: boolean;
  className?: String;
  placeholder: string;
  style?: object;
  options: Array<T>;
  bordered?: boolean;
  defaultValue?: string | number | boolean;
  rest?: Object;
}) {
  return (
    <AntdSelect
      showSearch={showSearch || false}
      style={style}
      placeholder={placeholder}
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={options}
      bordered={bordered}
      defaultValue={defaultValue}
      {...rest}
    />
  );
}
