import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroValues {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}
export default function Hero(props: HeroValues) {
  return (
    <div>
      <h1 className="text-5xl justify-center items-center pt-[20vh] m-auto text-center">{props.title}</h1>
      <div className="absolute -z-10 inset-0 bg-gradient-to-r from-slate-900">
        <Image
          alt={props.imgAlt}
          src={props.imgData}
          fill
          style={{ objectFit: "cover" }}
          className="bg-gradient-to-r from-slate-900"
        />
      </div>
    </div>
  );
}
