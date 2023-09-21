import type { MenuProps } from "antd";
import { Menu as AntdMenu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export function getMenuItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export default function Menu({
  mode,
  openKeys,
  onOpenChange,
  items,
}: {
  mode: "vertical" | "horizontal" | "inline";
  openKeys: string[];
  onOpenChange: (openKeys: string[]) => void;
  items: MenuItem[];
}) {
  return (
    <AntdMenu
      mode={mode}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      items={items}
    />
  );
}
