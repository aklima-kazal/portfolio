"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Comma from "@/assets/Comma.png";
import Ceo from "@/assets/Ceo.png";
import James from "@/assets/James.png";
import Willy from "@/assets/Willy.png";
import Slider from "react-slick";
import Arrows from "./Arrows";

const monserrat = Montserrat({
  subsets: ["latin"],
});
const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    Arrows: <Arrows />,
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
      <div className="about_us">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mx-auto">
              <div className="about_text text-center">
                <h1 className={monserrat.className}>
                  What People Say <span>About Us</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="about_slider ">
            <Slider {...settings}>
              <div className="item">
                <Image src={Comma} alt="img" />
                <p className={monserrat.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some.
                </p>
                <Image src={Ceo} alt="img" />
                <div className="ceos">
                  <p className={monserrat.className}>James Willy</p>
                </div>
              </div>
              <div className="item">
                <Image src={Comma} alt="img" />
                <p className={monserrat.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some.
                </p>
                <Image src={James} alt="img" />
                <div className="ceos">
                  <p className={monserrat.className}>James Willy</p>
                </div>
              </div>
              <div className="item">
                <Image src={Comma} alt="img" />
                <p className={monserrat.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some.
                </p>
                <Image src={Willy} alt="img" />
                <div className="ceos">
                  <p className={monserrat.className}>James Willy</p>
                </div>
              </div>
              <div className="item">
                <Image src={Comma} alt="img" />
                <p className={monserrat.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some.
                </p>
                <Image src={James} alt="img" />
                <div className="ceos">
                  <p className={monserrat.className}>James Willy</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
