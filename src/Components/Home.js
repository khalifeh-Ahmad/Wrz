import React from "react";

const Home = () => {
  return (
    <div>
      <div className="home-banner">
        <div className="container">
          <div className="row home-banner-top">
            <div className="col-md-12">
              <h1 id="typewriter">
                <span>
                  a Seamless Book for Various Services Related to Funerals and
                  Memorialization
                </span>
              </h1>
              <p id="fadeInText">
                Step-by-step process and interactive <span> walkthrough</span>
                of our best Services
              </p>
            </div>
          </div>
          <div className="row home-banner-mid">
            <div className="col-md-4 p-0">
              <div className="hbm-box hbm-box-left">
                <div className="standline">
                  <div></div>
                </div>
                <img
                  src={require("../assets/img/banner1.png")}
                  alt="Grieving Counseling and Support"
                />
                <h3>Grieving Counseling and Support</h3>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="hbm-box hbm-box-mid">
                <div className="standline">
                  <div></div>
                </div>
                <img
                  src={require("../assets/img/banner2.png")}
                  className="rounded-shape"
                  alt="Funeral Planning Wizard"
                />
                <h3>Funeral Planning Wizard</h3>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="hbm-box hbm-box-right">
                <div className="standline">
                  <div></div>
                </div>
                <img
                  src={require("../assets/img/banner3.png")}
                  alt="Platform Dashboard"
                />
                <h3>Platform Dashboard</h3>
              </div>
            </div>
          </div>
          <div className="row home-banner-mid-mobile">
            <div className="owl-carousel p-0">
              <div
                className="hbm-box hbm-box-mid"
                style={{ opacity: 1, transform: "translateY(0px)" }}
              >
                <div className="standline" style={{ height: "100px" }}>
                  <div></div>
                </div>
                <img
                  src={require("../assets/img/banner2-m.png")}
                  alt="Grieving Counseling and Support"
                />
                <h3>Grieving Counseling and Support</h3>
              </div>
              <div
                className="hbm-box hbm-box-left"
                style={{ opacity: 1, transform: "translateY(0px)" }}
              >
                <div className="standline" style={{ height: "100px" }}>
                  <div></div>
                </div>
                <img
                  src={require("../assets/img/banner1-m.png")}
                  alt="Funeral Planning Wizard"
                />
                <h3>Funeral Planning Wizard</h3>
              </div>
              <div
                className="hbm-box hbm-box-right"
                style={{ opacity: 1, transform: "translateY(0px)" }}
              >
                <div className="standline" style={{ height: "100px" }}>
                  <div></div>
                </div>
                <img
                  src={require("../assets/img/banner3-m.png")}
                  alt="Platform Dashboard"
                />
                <h3>Platform Dashboard</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
