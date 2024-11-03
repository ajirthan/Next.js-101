import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-center mb-5">Albums</h1>
      <div className="text-xl underline text-center mb-3">
        <Link href="/albums/use-effect">Use Effect</Link>
      </div>
      <div className="text-xl underline text-center">
        <Link href="/albums/fetch">Fetch</Link>
      </div>
    </>
  );
}
