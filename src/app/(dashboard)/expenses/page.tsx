"use client";
import Image from "next/image";
import { Col, Row } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import Button from "@/component/button/page";
import Tabs from "@/component/tabs/page";
import PageHeader from "../_component/pageHeader/pageHeader";

import { filter_icon } from "@/assets/icons";
import "./expenses.scss";
import YourOwn from "./_tabs/yourOwn/yourOwn";

export default function Expenses() {
  const onChange = () => {
    console.log("change");
  };

  const items = [
    {
      key: "1",
      label: "Your Own",
      children: <YourOwn />,
    },
    {
      key: "2",
      label: "To review (2)",
      children: "Content of Tab Pane review",
    },
    {
      key: "3",
      label: "To pay",
      children: "Content of Tab Pane To pay",
    },
    {
      key: "4",
      label: "All",
      children: "Content of Tab Pane All",
    },
    {
      key: "5",
      label: "Explorer",
      children: "Content of Tab Pane Explorer",
    },
  ];

  return (
    <>
      <Row className="mb-32 expenses-tab">
        <Col span={24}>
          <PageHeader
            title="Expenses"
            pageHeaderRight={
              <div className="w-100 row">
                <Button className="filter-button regular ml-8 mr-8">
                  <Image
                    src={filter_icon}
                    alt="Filter Icon"
                    width={24}
                    height={24}
                  />
                  Filter
                </Button>
                <Button
                  className="semibold update-button ml-8 wm-117"
                  type="primary"
                >
                  New Expense <CaretDownOutlined />
                </Button>
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
