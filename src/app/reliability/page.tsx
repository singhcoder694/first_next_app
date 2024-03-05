import reliability from "public/images/reliability.jpg";
import Hero from "@/Components/hero";
export default function Home() {
  return (
    <div>
      <Hero imgData={reliability} imgAlt="perfomance_image" title="User reliability is base of Our Product" />
    </div>
  );
}
