import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Carousel = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      loop
      center
      margin={16}
      autoplay
      autoplayTimeout={3000}
      autoplaySpeed={1000}
      smartSpeed={1000}
      nav
      dots
      responsive={{
        0: { items: 1.5 },
        768: { items: 2 },
        992: { items: 3 },
      }}
    >
      <div className="item">Slide 1</div>
      <div className="item">Slide 2</div>
      <div className="item">Slide 3</div>
    </OwlCarousel>
  );
};

export default Carousel;
