import React from "react";
import { Montserrat } from "next/font/google";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const monserrat = Montserrat({
  subsets: ["latin"],
});

const News = () => {
  return (
    <>
      <div className="news_letter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="news_text">
                <h3 className={monserrat.className}>Subscribe to Our</h3>
                <h4 className={monserrat.className}>Newsletter</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="news_btn">
                <input type="text"></input>
                <button>
                  <BsFillArrowRightSquareFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
