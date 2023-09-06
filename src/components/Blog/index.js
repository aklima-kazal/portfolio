"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Slider from "react-slick";
import Image from "next/image";
import slideImage from "@/assets/slide.png";
import slideImages from "@/assets/slide-2.png";
import slidesImage from "@/assets/slide-3.png";
import PrevArrow from "./PrevArrow";

const monserrat = Montserrat({
  subsets: ["latin"],
});

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    PrevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="blogs">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="blog_contents text-center">
                <h1 className={monserrat.className}>
                  Our Popular Project <span>And Blog</span>
                </h1>
                <p className={monserrat.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="blog_slider">
            <Slider {...settings}>
              <div className="item">
                <Image src={slideImage} alt="img" />
                <p className={monserrat.className}>
                  Bitcoin and Economic Freedom
                </p>
              </div>
              <div className="item">
                <Image src={slideImages} alt="img" />
                <p className={monserrat.className}>
                  Bitcoin and Economic Strategy
                </p>
              </div>
              <div className="item">
                <Image src={slidesImage} alt="img" />
                <p className={monserrat.className}>
                  Bitcoin and Economic Finance
                </p>
              </div>
              <div className="item">
                <Image src={slideImages} alt="img" />
                <p className={monserrat.className}>
                  Bitcoin and Economic Finance
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
