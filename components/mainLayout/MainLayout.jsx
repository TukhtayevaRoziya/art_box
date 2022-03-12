import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";

import style from "./MainLayout.module.css";
import Link from "next/link";

export const MainLayout = ({ children }) => {
  return (
    <>
      <nav>
        <div className={style.body}>
          <div>
            <Image
              src={logo}
              alt="Landscape picture"
              width={100}
              height={100}
            />
          </div>
          <div className={style.links}>
            <Link href={"/"}>Главная</Link>
            <Link href={"/sets"}>Наборы</Link>
            <Link href={"/masterClasses"}>Мастер-классы</Link>
            <Link href={"/paymentAndDelivery"}>Оплата и доставка</Link>
            <Link href={"/blog"}>Блог</Link>
          </div>
          <div>
            <Link href={'tel:+79955050335'}>☎ +7 995 505 03 35</Link>
          </div>
          <div>
            <Link href={'tel:+79955050335'}>Ava</Link>
            <Link href={'tel:+79955050335'}>Ava</Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};
