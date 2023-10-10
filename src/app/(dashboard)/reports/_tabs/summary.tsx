"use client";
import Tag from "@/component/tag/page";
import ListDataWidget from "@/organisms/widgets/listDataWidget/page";
import { Col, List, Row } from "antd";
import { useEffect, useState } from "react";
import { StarOutlined, StarFilled, DownOutlined } from "@ant-design/icons";
import Link from "next/link";

interface dataItemInterface {
  id: string | number;
  text: string;
  status: "new" | "old";
  loading: boolean;
}

const statusData = "new" || "old";

const data: dataItemInterface[] = [
  {
    id: 1,
    text: "Budget Manager",
    status: "new",
    loading: false,
  },
  {
    id: 2,
    text: "Balance Sheet",
    status: "old",
    loading: false,
  },
  {
    id: 3,
    text: "Profit and Loss",
    status: "new",
    loading: false,
  },
  {
    id: 4,
    text: "Statement of Cash Flows",
    status: "new",
    loading: false,
  },
  {
    id: 5,
    text: "Cash Summary",
    status: "old",
    loading: false,
  },
];

export default function Summary() {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<any[]>(data);
  const onLoadMore = () => {
    // Use loading while fetching data from the server
    // setLoading(true);

    setList([
      ...list,
      {
        id: list?.length + 1,
        text: "Balance Sheet",
        status: "new",
        loading: false,
      },
    ]);
  };

  useEffect(() => {
    setInitLoading(false);
  }, []);
  const loadMore =
    !initLoading && !loading ? (
      <List.Item className="list-item cursor-pointer">
        <div
          className="row w-100 justify-content-between "
          onClick={onLoadMore}
        >
          <div className="row w-100">
            <DownOutlined className="p-5" />
            <h5 className="regular ml-12">More Reports</h5>
          </div>
          {statusData === status && <Tag className="primary-tag">New</Tag>}
        </div>
      </List.Item>
    ) : null;

  return (
    <Row gutter={[32, 24]} className="justify-content-between">
      <Col span={12}>
        <h2 className="mb-8">Financial</h2>
        <div className="">
          <ListDataWidget
            widgetClassName="demo-load more-list "
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            header={null}
            footer={null}
            bordered
            dataSource={list}
            renderItem={({ id, value, text, status }) => (
              // <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item className="list-item ">
                <div className="row w-100 justify-content-between">
                  <div className="row w-100 align-items-center">
                    {statusData === status ? (
                      <StarOutlined className="x-large-icon" />
                    ) : (
                      <StarFilled className="x-large-icon secondary-color" />
                    )}
                    <h5 className="medium ml-12">
                      <Link href="/reports/balancesheet">{text}</Link>
                    </h5>
                  </div>
                  {statusData === status && (
                    <Tag className="primary-tag">New</Tag>
                  )}
                </div>
              </List.Item>
              // </Skeleton>
            )}
          />
        </div>
      </Col>
      <Col span={12}>
        <h2 className="mb-8">Sales</h2>
        <div className="">
          <ListDataWidget
            widgetClassName="demo-load more-list "
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            header={null}
            footer={null}
            bordered
            dataSource={list}
            renderItem={({ id, value, text, status }) => (
              // <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item className="list-item ">
                <div className="row w-100 justify-content-between">
                  <div className="row w-100 align-items-center">
                    {statusData === status ? (
                      <StarOutlined className="x-large-icon" />
                    ) : (
                      <StarFilled className="x-large-icon secondary-color" />
                    )}
                    <h5 className="medium ml-12">{text}</h5>
                  </div>
                  {statusData === status && (
                    <Tag className="primary-tag">New</Tag>
                  )}
                </div>
              </List.Item>
              // </Skeleton>
            )}
          />
        </div>
      </Col>
      <Col span={12}>
        <h2 className="mb-8">Tax</h2>
        <div className="">
          <ListDataWidget
            widgetClassName="demo-load more-list "
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            header={null}
            footer={null}
            bordered
            dataSource={list}
            renderItem={({ id, value, text, status }) => (
              // <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item className="list-item ">
                <div className="row w-100 justify-content-between">
                  <div className="row w-100 align-items-center">
                    {statusData === status ? (
                      <StarOutlined className="x-large-icon" />
                    ) : (
                      <StarFilled className="x-large-icon secondary-color" />
                    )}
                    <h5 className="medium ml-12">{text}</h5>
                  </div>
                  {statusData === status && (
                    <Tag className="primary-tag">New</Tag>
                  )}
                </div>
              </List.Item>
              // </Skeleton>
            )}
          />
        </div>
      </Col>
      <Col span={12}>
        <h2 className="mb-8">Purchases</h2>
        <div className="">
          <ListDataWidget
            widgetClassName="demo-load more-list "
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            header={null}
            footer={null}
            bordered
            dataSource={list}
            renderItem={({ id, value, text, status }) => (
              // <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item className="list-item ">
                <div className="row w-100 justify-content-between">
                  <div className="row w-100 align-items-center">
                    {statusData === status ? (
                      <StarOutlined className="x-large-icon" />
                    ) : (
                      <StarFilled className="x-large-icon secondary-color" />
                    )}
                    <h5 className="medium ml-12">{text}</h5>
                  </div>
                  {statusData === status && (
                    <Tag className="primary-tag">New</Tag>
                  )}
                </div>
              </List.Item>
              // </Skeleton>
            )}
          />
        </div>
      </Col>
      <Col span={12}>
        <h2 className="mb-8">Accounting</h2>
        <div className="">
          <ListDataWidget
            widgetClassName="demo-load more-list "
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            header={null}
            footer={null}
            bordered
            dataSource={list}
            renderItem={({ id, value, text, status }) => (
              // <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item className="list-item ">
                <div className="row w-100 justify-content-between">
                  <div className="row w-100 align-items-center">
                    {statusData === status ? (
                      <StarOutlined className="x-large-icon" />
                    ) : (
                      <StarFilled className="x-large-icon secondary-color" />
                    )}
                    <h5 className="medium ml-12">{text}</h5>
                  </div>
                  {statusData === status && (
                    <Tag className="primary-tag">New</Tag>
                  )}
                </div>
              </List.Item>
              // </Skeleton>
            )}
          />
        </div>
      </Col>
      <Col span={12}>
        <h2 className="mb-8">Inventory</h2>
        <div className="">
          <ListDataWidget
            widgetClassName="demo-load more-list "
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            header={null}
            footer={null}
            bordered
            dataSource={list}
            renderItem={({ id, value, text, status }) => (
              // <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item className="list-item ">
                <div className="row w-100 justify-content-between">
                  <div className="row w-100 align-items-center">
                    {statusData === status ? (
                      <StarOutlined className="x-large-icon" />
                    ) : (
                      <StarFilled className="x-large-icon secondary-color" />
                    )}
                    <h5 className="medium ml-12">{text}</h5>
                  </div>
                  {statusData === status && (
                    <Tag className="primary-tag">New</Tag>
                  )}
                </div>
              </List.Item>
              // </Skeleton>
            )}
          />
        </div>
      </Col>
    </Row>
  );
}
