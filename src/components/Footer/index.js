import Link from "next/link";
import React from "react";
import Logo from "../../assets/Logo.svg";
import Image from "next/image";
import { DM_Sans, Montserrat } from "next/font/google";
import { FooterAfterLists, FooterBeforeLists } from "@/data/CommonData";

import { FiSend } from "react-icons/fi";
import Facebook from "@/assets/svg/Facebook";
import Insta from "@/assets/svg/Insta";
import Twitter from "@/assets/svg/Twitter";
import P from "@/assets/svg/P";

const monserrat = Montserrat({
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div>
                <Link href="/">
                  <Image src={Logo} loading="lazy" alt="Logo" />
                </Link>
                <div className="short-info-footer">
                  <p className={monserrat.className}>
                    There are many variations of passages of available, but the
                    majority have suffered.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-before-list">
                <h4 className={monserrat.className}>Services</h4>
                <div className="before-list">
                  {FooterBeforeLists.map((item, i) => (
                    <Link className={dmSans.className} href={item.link} key={i}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-before-list">
                <h4 className={monserrat.className}>Resources</h4>
                <div className="before-list">
                  {FooterAfterLists.map((item, i) => (
                    <Link className={dmSans.className} href={item.link} key={i}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-newsletter">
                <h4 className={monserrat.className}>Newsletter</h4>
                <div className="newsletter-body">
                  <p className={dmSans.className}>
                    Subscribe for our upcoming latest address and resources
                  </p>
                  <div className="newsletter-form">
                    <input type="email"></input>
                    <button>
                      <FiSend />
                    </button>
                  </div>
                  <div className="footer-social">
                    <div className="images">
                      <Facebook />
                    </div>
                    <div className="images">
                      <Insta />
                    </div>
                    <div className="images">
                      <Twitter />
                    </div>
                    <div className="images">
                      <P />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
