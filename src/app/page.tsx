import Link from "next/link";
import leftSideImage from "../assets/img/pexels-fauxels-3184433.png";
import { Col, Row } from "antd";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Row>
        <Col>
          <Image
            src={leftSideImage}
            alt="left side banner image"
            className="vh-100"
          />
        </Col>
        <Col flex={1} className="justify-content-center col align-items-center">
          <div>
            <h1>Welcome to the LMS</h1>
          </div>
          <div>
            <h5>
              <Link href={"/overview"}>Dashboard</Link>
            </h5>
          </div>
        </Col>
      </Row>
    </>
  );
}
