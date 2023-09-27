import LineSeries from "@/component/_charts/lineSeries/lineSeries";
import PageHeader from "../_component/pageHeader/pageHeader";
import { Col, Row } from "antd";
import InvoicesBillsWidget from "@/organisms/widgets/invoicesBillsWidget/page";
import DataCollapseWidget from "@/organisms/widgets/dataCollapseWidget/page";

export default function Dashboard() {
  return (
    <>
      <Row className="pb-32">
        <Col>
          <PageHeader title="Cash Flow " />
        </Col>
        <Col>
          <span></span>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <InvoicesBillsWidget />
        </Col>
      </Row>
      <Row className="pt-6">
        <Col span={8} className="pr-6">
          <DataCollapseWidget />
        </Col>
        <Col span={8} className="pr-6">
          <DataCollapseWidget />
        </Col>
        <Col span={8}>
          <DataCollapseWidget />
        </Col>
      </Row>
    </>
  );
}
