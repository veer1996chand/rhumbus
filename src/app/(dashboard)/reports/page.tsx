"use client";
import PageHeader from "../_component/pageHeader/pageHeader";
import { Col, Row } from "antd";
import SearchInput from "@/component/searchInput/Page";
import "./reports.scss";
import Tabs from "@/component/tabs/page";
import Summary from "./_tabs/summary";
export default function Reports() {
  const onChange = () => {
    console.log("change");
  };

  const items = [
    {
      key: "1",
      label: "Summary",
      children: <Summary />,
    },
    {
      key: "2",
      label: "Custom",
      children: "Content of Tab Pane Custom",
    },
    {
      key: "3",
      label: "Draft",
      children: "Content of Tab Pane Draft",
    },
    {
      key: "4",
      label: "Published",
      children: "Content of Tab Pane Published",
    },
    {
      key: "5",
      label: "Archived",
      children: "Content of Tab Pane Archived",
    },
  ];

  return (
    <>
      <Row className="pb-32">
        <Col span={24}>
          <PageHeader
            title="Reports"
            pageHeaderRight={
              <div>
                <SearchInput className="page-header-search-input" />
              </div>
            }
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Tabs items={items} onChange={onChange} />
        </Col>
      </Row>
    </>
  );
}
