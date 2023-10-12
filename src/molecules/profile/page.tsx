import { Col, Row } from "antd";
import ProfileImg from "../../assets/img/profile.svg";
import Image from "next/image";
import "./profile.scss";
export default function Profile() {
  return (
    <Row className="align-items-center">
      <Col className="mr-8">
        <Image src={ProfileImg} alt="user-profile" width={32} height={32} />
      </Col>
      <Col>
        <div>
          <h5 className="medium">Katie Pena</h5>
          <h6 className="regular">Admin</h6>
        </div>
      </Col>
    </Row>
  );
}
