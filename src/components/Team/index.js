"use client";
import React from "react";
import { DM_Sans, Montserrat } from "next/font/google";
import Image from "next/image";
import teamImage from "@/assets/team.png";
import { motion } from "framer-motion";
import Object from "../../assets/Object.svg";

const monserrat = Montserrat({
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
});
const Team = () => {
  return (
    <>
      <div className="team_member">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="team-content text-center">
                <h4 className={monserrat.className}>
                  Run Agency Smartly with Our <span>Team Member.</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 d-flex">
              <div className="left_team_img">
                <Image src={teamImage} alt="img" />
                <div className="object_team">
                  <Image src={Object} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right_team_content">
                <h2 className={monserrat.className}>
                  What provide to <span>our client</span>
                </h2>
                <p className={monserrat.className}>
                  There are many variations of passages of Lorem Ipsum availabl
                  , but the majority have suffered alteration in some for by
                  injected humour, or randomised words which don't look.There
                  are many variations of passages.
                </p>
                <div className="scoend_team_content">
                  <h2 className={monserrat.className}>
                    Optimize for quickly <span>display</span>.
                  </h2>
                  <p className={monserrat.className}>
                    There are many variations of passages of Lorem Ipsum
                    availabl but the major.There are many variations of passages
                    of.
                  </p>
                  <div className="team_btn">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className={dmSans.className}
                    >
                      Contact Now
                    </motion.button>{" "}
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

export default Team;
