import Link from "next/link";
import { MainLayout } from "../components/mainLayout/MainLayout";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Art box</title>
      </Head> */}
      <MainLayout>
        Hello I`m NextJs
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Posts</Link>
      </MainLayout>
    </>
  );
}
