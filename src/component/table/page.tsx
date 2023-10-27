import { Table as AntdTable } from "antd";
import "./table.scss";
import { ColumnsType } from "antd/es/table";

export default function Table({
  className = "",
  columns = [],
  dataSource = [],
  rowClassName,
  ...rest
}: {
  className?: string;
  columns: ColumnsType<[]>;
  dataSource: [];
  rowClassName: (record: any, index: number) => string;
  [rest: string]: any;
}) {
  console.log(rowClassName);
  return (
    <AntdTable
      className={`ant-table ${className}`}
      rowClassName={rowClassName}
      columns={columns}
      dataSource={dataSource}
      {...rest}
    />
  );
}
