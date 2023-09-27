"use client";

import "./layout.scss";
import Card from "@/component/card/page";

export default function WidgetLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <Card className="widget-layout">{children}</Card>;
}
