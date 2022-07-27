import Link from "next/link";
import { MainLayout } from "../components/mainLayout/MainLayout";
import "antd/dist/antd.css";
import { Home } from './../components/home/Home';
import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Art box</title>
      </Head>
      <MainLayout>
        <Home />
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Posts</Link>
      </MainLayout>
    </div>
  );
}
