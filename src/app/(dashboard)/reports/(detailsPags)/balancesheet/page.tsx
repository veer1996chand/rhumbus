"use client";
import Breadcrumb from "@/component/breadcrumb/page";
import { Col, Row } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import PageHeader from "@/app/(dashboard)/_component/pageHeader/pageHeader";
import "./balancesheet.scss";
import DatePicker from "@/component/datepicker/page";
import { customFormat } from "@/utilities/helper";
import { dateFormat } from "@/utilities/constants";

export default function Balancesheet() {
  return (
    <>
      <Row>
        <Breadcrumb
          separator={
            <div className="back-arrow">
              <LeftOutlined />
            </div>
          }
          items={[
            {
              title: "",
            },
            {
              title: "Reports",
              href: "/reports",
            },
          ]}
        />
      </Row>

      <Row className="pb-32">
        <Col span={24}>
          <PageHeader
            title="Balance Sheet"
            pageHeaderRight={
              <div>
                <DatePicker
                  // defaultValue={dayjs("01 february 2021", dateFormat)} //comment due to some changes
                  format={customFormat}
                />
              </div>
            }
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>{/* <Tabs items={items} onChange={onChange} /> */}</Col>
      </Row>
    </>
  );
}
