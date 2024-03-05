import perfomance from "public/images/performance.jpg";
import Hero from "@/Components/hero";
export default function Home() {
  return (
    <div>
      <Hero imgData={perfomance} imgAlt="perfomance_image" title="Perfomance is base of our Product" />
    </div>
  );
}
