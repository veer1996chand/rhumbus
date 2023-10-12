"use client";
import Breadcrumb from "@/component/breadcrumb/page";
import { Badge, Col, List, Row } from "antd";
import {
  DollarTwoTone,
  HomeFilled,
  PoundCircleFilled,
  GiftFilled,
  MoreOutlined,
  DollarOutlined,
  StarTwoTone,
} from "@ant-design/icons";
import { LeftOutlined, CaretDownOutlined } from "@ant-design/icons";
import PageHeader from "@/app/(dashboard)/_component/pageHeader/pageHeader";
import DatePicker from "@/component/datepicker/page";
import { customFormat } from "@/utilities/helper";
import Select from "@/component/select/page";
import Button from "@/component/button/page";
import {
  combined_shape,
  dollar_money_icon,
  filter_icon,
  ic_directions_car,
  ic_payment,
} from "@/assets/icons.js";
import Image from "next/image";
import Card from "@/component/card/page";
import "./yourOwn.scss";

import ListDataWidget from "@/organisms/widgets/listDataWidget/page";
import { IconsColor } from "@/utilities/constants";

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

const expensesDetails = [
  {
    id: 1,
    header: "Draft",
    count: "(1)",
    data: [
      {
        id: 1,
        icon: <Image src={dollar_money_icon} alt="dollar_money_icon" />,
        title: "New Draft",
        text: "Spent Aug 22, 2020",
        status: "Reimbursable",
        value: "1602.00",
      },
    ],
  },
  {
    id: 2,
    header: "Submitted ",
    count: "(4)",
    data: [
      {
        id: 1,
        icon: <Image src={ic_directions_car} alt="dollar_money_icon" />,
        title: "24 km “Travel to Idealist Design Studio”",
        text: "Travelled Jul 3, 2020 - 300 -  Advertiing",
        status: "Reimbursable",
        value: "112.90",
      },
      {
        id: 2,
        icon: <Image src={dollar_money_icon} alt="dollar_money_icon" />,
        title: "Lajou Cafe and Resto “Dinner with client”",
        text: "Travelled Jul 3, 2020 - 300 -  Advertiing",
        status: "Reimbursable",
        value: "230.00",
      },
      {
        id: 2,
        icon: <Image src={ic_payment} alt="dollar_money_icon" />,
        title: "Macbook Pro 2021 “New device for new year”",
        text: "Spent Dec 29, 2020 - 400 -  Advertiing",
        status: "Non-Reimbursable",
        value: "989.00",
      },
    ],
  },
  {
    id: 3,
    header: "To be Paid",
    count: "(1)",
    data: [
      {
        id: 1,
        icon: <Image src={dollar_money_icon} alt="dollar_money_icon" />,
        title: "Monde’s Bakery “Office Catering”",
        text: "Spent Aug 22, 2020",
        status: "Reimbursable",
        value: "1602.00",
      },
    ],
  },
];

export default function YourOwn() {
  return (
    <>
      <Row className="mt-6">
        <Col span={24} className="balance-sheet-card ">
          <Row className="your-own-sub-header h-56 ">
            <Col span={12} className="border-right p-24">
              <h5 className="medium mb-8">Submitted</h5>
              <p className="big-number">910.00</p>
            </Col>
            <Col span={12} className="mt-8 p-24">
              <h5 className="medium">To be paid</h5>
              <p className="big-number">566.90</p>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              {(expensesDetails || 0).map(({ header, count, data }, index) => (
                <div key={index}>
                  <ListDataWidget
                    className="mt-24"
                    size="large"
                    widgetClassName="list-action"
                    header={
                      <h5 className="medium">
                        {header} <span>{count}</span>
                      </h5>
                    }
                    footer={null}
                    bordered
                    dataSource={data}
                    renderItem={({
                      id,
                      icon,
                      title,
                      status,
                      value,
                      text,
                      buttonName,
                    }) => (
                      <List.Item className="list-item pl-14 pt-16">
                        <div className="row w-100 justify-content-between">
                          <div className="row w-100 align-items-center">
                            <div className="mr-10">{icon}</div>

                            <div className="ml-10">
                              <h5 className="medium">{title}</h5>
                              <p className="paragraph2">
                                {text}
                                <Badge
                                  color={IconsColor.dark6Dark}
                                  status="default"
                                  className="ml-8 mr-8"
                                />
                                {status}
                              </p>
                            </div>
                          </div>

                          <div className="row align-items-baseline">
                            <h5 className="semibold mr-24">{value}</h5>
                            <MoreOutlined className="ml-24" />
                          </div>
                        </div>
                      </List.Item>
                    )}
                  />
                </div>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
