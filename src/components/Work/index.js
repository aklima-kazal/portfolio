"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import LeftWork from "@/assets/leftWork.png";
import groupWork from "@/assets/Group work.png";

const monserrat = Montserrat({
  subsets: ["latin"],
});
const Work = () => {
  return (
    <>
      <div className="work">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="work_content text-center">
                <h1 className={monserrat.className}>
                  How it <span>Work</span>
                </h1>
                <p className={monserrat.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 ">
              <div className="work_imgs_one">
                <Image src={LeftWork} width={700} height={600} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image_content text-center">
                <h2 className={monserrat.className}>
                  What provide to <span>our clint </span>
                </h2>
                <p className={monserrat.className}>
                  There are many variations of passages of Lorem Ipsum availabl
                  , but the majority have suffered alteration in some for by.
                </p>
              </div>
              <div className="work_imgs_two">
                <Image src={groupWork} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
