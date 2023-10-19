import Image from "next/image";
import LogoImg from "../../assets/img/Logo.png";
import "./logo.scss";

export default function Logo({ icon }: { icon: boolean }) {
  return (
    <div className="logo">
      <Image src={LogoImg} alt="Logo" />
      {!icon && <span>Rhombus</span>}
    </div>
  );
}
