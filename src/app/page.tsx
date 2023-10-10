import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/overview"}>Dashboard</Link>
    </div>
  );
}
