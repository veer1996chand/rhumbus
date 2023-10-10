"use client";
import "./listDataWidget.scss";
import List, { ListInterface } from "@/component/list/page";

interface ListDataWidgetInterface extends ListInterface {
  widgetClassName?: string;
  loading?: boolean;
}

export default function ListDataWidget({
  widgetClassName,
  loading,
  bordered,
  className,
  style,
  dataSource,
  extra,
  grid,
  id,
  itemLayout,
  loadMore,
  renderItem,
  size,
  header,
  footer,
}: ListDataWidgetInterface) {
  return (
    <div className={`list-data-widget ${widgetClassName}`}>
      <List
        bordered={bordered}
        className={className}
        loading={loading}
        style={style}
        dataSource={dataSource}
        extra={extra}
        grid={grid}
        id={id}
        itemLayout={itemLayout}
        loadMore={loadMore}
        renderItem={renderItem}
        size={size}
        header={header}
        footer={footer}
      />
    </div>
  );
}
