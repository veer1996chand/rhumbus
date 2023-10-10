"use client";
import { Tabs as AntdTabs } from "antd";
import type { TabsProps } from "antd";
import "./tabs.scss";

export default function Tabs({ items, className, onChange }: TabsProps) {
  return <AntdTabs className={className} items={items} onChange={onChange} />;
}
