import homeImg from "public/images/home.jpg";
import Hero from "@/Components/hero";
export default function Home() {
  return (
    <div>
      <Hero imgData={homeImg} imgAlt="home" title="Professional Cloud Hosting" />
    </div>
  );
}
