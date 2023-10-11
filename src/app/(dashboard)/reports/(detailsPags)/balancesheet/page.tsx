"use client";
import Breadcrumb from "@/component/breadcrumb/page";
import { Col, Row } from "antd";
import { LeftOutlined, CaretDownOutlined } from "@ant-design/icons";
import PageHeader from "@/app/(dashboard)/_component/pageHeader/pageHeader";
import DatePicker from "@/component/datepicker/page";
import { customFormat } from "@/utilities/helper";
import Select from "@/component/select/page";
import Button from "@/component/button/page";
import { combined_shape, filter_icon } from "@/assets/icons.js";
import Image from "next/image";
import Card from "@/component/card/page";
import "./balancesheet.scss";

export const comparisonOptions = [
  {
    value: "1",
    label: "1 Period",
  },
  {
    value: "2",
    label: "2 Period",
  },
];

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
              <div className="balancesheet-header">
                <DatePicker
                  className="h-40 mr-8 wm-240"
                  suffixIcon={<CaretDownOutlined />}
                  // defaultValue={dayjs("01 february 2021", dateFormat)} //comment due to some changes
                  format={customFormat}
                />
                <Select
                  className="h-40 ml-8 mr-8 wm-240 comparison-select"
                  placeholder="Search to Select"
                  suffixIcon={<CaretDownOutlined />}
                  options={comparisonOptions}
                  defaultValue="1"
                  style={{ width: 212 }}
                />
                <Button className="filter-button ml-8 mr-8">
                  <Image
                    src={filter_icon}
                    alt="Filter Icon"
                    width={24}
                    height={24}
                  />
                  <h5 className="regular">Filter</h5>
                </Button>
                <Button className="semibold update-button ml-8" type="primary">
                  Update
                </Button>
              </div>
            }
          />
        </Col>
      </Row>
      <Row>
        <Col span={24} className="balance-sheet-card p-24">
          <h2 className="mb-16">Balance Sheet</h2>

          <Card className="sub-header mt-16 mb-8 h-56">
            <Image src={combined_shape} alt="combined_shape" className="mr-6" />
            <h4 className="medium mr-6 ml-6">Lajou cafe</h4>{" "}
            <span className="paragraph2 ml-6">As at 1 February 2021</span>
          </Card>
          <Row className="mt-8 pt-14 pb-14 pl-16 bg-dark-5-dark">
            <h4 className="medium ">Assets</h4>
          </Row>
          <Row className="pt-16 pb-16 pl-20">
            <h5 className="medium">Bank</h5>
          </Row>
          <Row
            className="pt-16 pb-16 pl-40 bg-dark-5-dark"
            justify={"space-between"}
          >
            <span className="regular paragraph2">Business Bank Account</span>
            <h5 className="semibold">1,602.00</h5>
          </Row>
          <Row className="pt-16 pb-16 pl-40" justify={"space-between"}>
            <span className="regular paragraph2">Total Bank</span>
            <h5 className="semibold">1,602.00</h5>
          </Row>
          <Row
            className="pt-16 pb-16 pl-28 bg-dark-5-dark"
            justify={"space-between"}
          >
            <h5 className="medium">Total Assets</h5>
            <h5 className="semibold">1,602.00</h5>
          </Row>

          {/*  */}
          <Row className="mt-8 pt-14 pb-14 pl-16 bg-dark-5-dark">
            <h4 className="medium ">Liabilities</h4>
          </Row>
          <Row className="pt-16 pb-16 pl-20">
            <h5 className="medium">Current Liabilities</h5>
          </Row>
          <Row
            className="pt-16 pb-16 pl-40 bg-dark-5-dark"
            justify={"space-between"}
          >
            <span className="regular paragraph2">Historical Adjusment</span>
            <h5 className="semibold">1,602.00</h5>
          </Row>
          <Row className="pt-16 pb-16 pl-40" justify={"space-between"}>
            <span className="regular paragraph2">
              Total Current Liabilities
            </span>
            <h5 className="semibold">1,602.00</h5>
          </Row>
          <Row
            className="pt-16 pb-16 pl-28 bg-dark-5-dark"
            justify={"space-between"}
          >
            <h5 className="medium">Total Liabilities</h5>
            <h5 className="semibold">1,602.00</h5>
          </Row>
          <Row
            className="mt-8 pt-14 pb-14 pl-16  border-bottom"
            justify={"space-between"}
          >
            <h4 className="medium ">Net Assets</h4>
            <h5 className="semibold">-</h5>
          </Row>
          <Row className="pt-24 " justify={"end"}>
            <Button
              className="semibold update-button ml-8 h-40 wm-117"
              type="primary"
            >
              Save us <CaretDownOutlined />
            </Button>
            <Button
              className="semibold update-button ml-8 h-40 wm-117"
              type="primary"
            >
              Export <CaretDownOutlined />
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
}
