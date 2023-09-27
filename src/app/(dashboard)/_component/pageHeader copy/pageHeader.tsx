"use client";

import { Col, Row } from "antd";

export default function PageHeader({
  title,
  text,
}: {
  title: String;
  text: String;
}) {
  return (
    <Row>
      <Col>
        <h1>{title} </h1>
        <h5 className="regular">{text}</h5>
      </Col>
      <Col></Col>
    </Row>
  );
}
