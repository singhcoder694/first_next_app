import scale from "public/images/scale.jpg";
import Hero from "@/Components/hero";
export default function Home() {
  return (
    <div>
      <Hero imgData={scale} imgAlt="scale_image" title="Scale using our Product is faster and easier" />
    </div>
  );
}
