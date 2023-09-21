import { Avatar, Col, Row } from "antd";
import ProfileImg from "../../assets/img/profile.svg";
import Image from "next/image";
import "./profile.scss";
export default function Profile() {
  return (
    <Row className="align-items-center">
      <Col>
        <Avatar size="large" className="profile-avatar">
          <Image src={ProfileImg} alt="user-profile" />
        </Avatar>
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
