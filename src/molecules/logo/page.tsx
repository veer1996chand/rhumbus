import Image from "next/image";
import LogoImg from "../../assets/img/Logo.png";
import "./logo.scss";

export default function Logo() {
  return (
    <div className="logo">
      <Image src={LogoImg} alt="Logo" />
      <span>Rhombus</span>
    </div>
  );
}
