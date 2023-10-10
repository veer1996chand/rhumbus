"use client";

import { Col, Row } from "antd";
import "./pageHeader.scss";

interface PageHeaderRightInterface {
  title: String;
  text?: String;
  className?: any;
  pageHeaderRight?: any;
}

export default function PageHeader({
  title,
  text,
  className,
  pageHeaderRight,
}: PageHeaderRightInterface) {
  return (
    <Row className={`page-header ${className}`}>
      <Col>
        <h1>{title} </h1>
        <h5 className="regular">{text}</h5>
      </Col>
      <Col>{pageHeaderRight}</Col>
    </Row>
  );
}
