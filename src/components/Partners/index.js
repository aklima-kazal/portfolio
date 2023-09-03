"use client";
import React from "react";
import { DM_Sans, Inter } from "next/font/google";
import PartnersImg from "@/assets/partner.png";

import Image from "next/image";

const dmSans = DM_Sans({
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
});
const Partners = () => {
  return (
    <>
      <div className="part_ners_part">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mx-auto">
              <div className="partners_content ">
                <h2 className={dmSans.className}>
                  Reputed <span>Partners</span>
                </h2>
              </div>
            </div>
            <div className="img">
              <Image src={PartnersImg} />
              <div className="p_text text-center">
                <p className={inter.className}>
                  including thousands other brokers and prop firms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
