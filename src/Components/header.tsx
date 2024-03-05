import Link from "next/link";
export default function Header() {
  return (
    <div className="flex justify-between mt-3 text-xl ml-5 mr-5 z-10">
      <div>
        <Link href="/" className="ml-5 text-2xl font-bold">Cloud Corp</Link>
      </div>
      <div className="flex space-x-5 mr-5">
        <Link href="/perfomance">Perfomance</Link>
        <Link href="/reliability">Reliability</Link>
        <Link href="/scale">Scale</Link>
      </div>
    </div>
  );
}
