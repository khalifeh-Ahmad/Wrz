import "./App.css";
import React, { useEffect } from "react";
import Home from "./Components/Home";
import Bottom from "./Components/Shared/Bottom";
import NavBar from "./Components/Shared/NavBar";
import WhatsApp from "./Components/Shared/WhatsApp";
import $ from "jquery";
import MyStepper from "./Components/Wizard/MyStepper";

// import { StepperWithContent } from "./Components/Wizard/Stepper";

function App() {
  // useEffect(() => {
  //   // Menu open/close logic
  //   $(".open-menu").on("click", function () {
  //     $(".top-navbar").addClass("menu-open");
  //     $(".open-menu").hide();
  //     $(".close-menu").show();
  //   });

  //   $(".close-menu").on("click", function () {
  //     $(".top-navbar").removeClass("menu-open");
  //     $(".close-menu").hide();
  //     $(".open-menu").show();
  //   });

  //   // Owl carousel initialization
  //   $(".owl-carousel").owlCarousel({
  //     loop: true,
  //     center: true,
  //     items: 3,
  //     margin: 16,
  //     autoplay: true,
  //     autoplayTimeout: 3000,
  //     autoplaySpeed: 1000,
  //     smartSpeed: 1000,
  //     nav: true,
  //     dots: true,
  //     responsive: {
  //       0: { items: 1.5 },
  //       768: { items: 2 },
  //       992: { items: 3 },
  //     },
  //   });

  //   // Cleanup event listeners on unmount
  //   return () => {
  //     $(".open-menu").off("click");
  //     $(".close-menu").off("click");
  //   };
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <MyStepper />
      <Bottom />
      <WhatsApp />
    </div>
  );
}

export default App;
