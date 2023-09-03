"use client";
import Image from "next/image";
import React from "react";
import ClientImage from "@/assets/client.jpg";
import { DM_Sans, Montserrat, Open_Sans } from "next/font/google";
import { ClientData } from "@/data/CommonData";
import Link from "next/link";
import { TbMathGreater } from "react-icons/tb";
const monserrat = Montserrat({
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
});
const Clients = () => {
  return (
    <>
      <div className="clients">
        <div className="container">
          <div className="row align-items-end justify-content-between">
            <div className="col-lg-5">
              <div className="left_client">
                <h2 className={monserrat.className}>
                  What we provide to <span>our Client</span>
                </h2>
                <p className={monserrat.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have.
                </p>
                <div className="client-img">
                  <Image
                    src={ClientImage}
                    width={600}
                    height={600}
                    alt="client"
                  />
                  <div className="experience text-center">
                    <h4 className={openSans.className}>10+</h4>
                    <p className={openSans.className}>Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right_client">
                <div className="row ">
                  {ClientData.map((item, i) => (
                    <div className="col-lg-6" key={i}>
                      <div className="clint_data">
                        {item.icon}
                        <h4 className={monserrat.className}>{item.title}</h4>
                        <p className={openSans.className}>{item.description}</p>
                        <div className="arrow">
                          <Link href="/">
                            {item.readMore}
                            <TbMathGreater />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
