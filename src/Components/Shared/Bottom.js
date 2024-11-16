import React from "react";

const Bottom = () => {
  return (
    <div>
      <div className="home-bottom">
        <div className="container">
          <div className="row home-banner-bottom">
            <svg
              className="home-bottom-showreel-svg-1"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M-4.37112e-06 49.9998L0 -4.37114e-06C-2.41411e-06 27.6142 22.3858 49.9998 50 49.9998L-4.37112e-06 49.9998Z"
                fill="#253133"
              />
            </svg>

            <div className="col-md-12 p-lg-0">
              <div
                className="home-bottom-showreel"
                style={{
                  background: "url('../../assets/img/showreel.png')",
                }}
              >
                <div className="showreel-overlay"></div>
                <div className="home-banner-bottom-action">
                  <div className="showreel-btn">
                    Watch Showreel
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                    >
                      <path
                        d="M15.5382 10.2078C14.6383 9.67453 13.5 10.3232 13.5 11.3692V42.6307C13.5 43.6768 14.6383 44.3254 15.5382 43.7922L41.9152 28.1614C42.7975 27.6385 42.7975 26.3614 41.9152 25.8385L15.5382 10.2078Z"
                        fill="#EEAC0B"
                        stroke="#EEAC0B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <img
                    src={require("../../assets/img/ywu.svg")}
                    alt="Showreel"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
