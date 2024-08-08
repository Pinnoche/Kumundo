import Image from "next/image";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";

export default function Home() {
  return (
    <main className="min-h-screen pt-16 text-white">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
