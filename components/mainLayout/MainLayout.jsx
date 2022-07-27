import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";

import style from "./MainLayout.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';
import { Avatar } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

export const MainLayout = ({ children }) => {
  const router = useRouter();

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
            <Link href="/">
              <a className={router.pathname == "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href={"/sets"} scroll={false}>
              Наборы
            </Link>
            <Link href={"/masterClasses"}>Мастер-классы</Link>
            <Link href={"/paymentAndDelivery"}>Оплата и доставка</Link>
            <Link href={"/blog"}>Блог</Link>
          </div>
          <div>
            <Link href={"tel:+79955050335"}>☎ +7 995 505 03 35</Link>
          </div>
          <div className={style.btn}>
            <Link href="/user" passHref>
              <Avatar
                style={{
                  backgroundColor: "#FFC1AE",
                }}
                icon={<UserOutlined />}
              />
            </Link>
            <Avatar
              style={{
                backgroundColor: "#FFC1AE",
              }}
              icon={<ShoppingCartOutlined />}
            />
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};
