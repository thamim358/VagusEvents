import { useRef } from "react";
import {
  useGsapFeaturedLeftShutter,
  useGsapFeaturedRightShutter,
} from "../Hooks/gsap";
import SectionTitle from "./SectionTitle";
import marr1 from "../img/couple.jpg";
import marr2 from "../img/marr.jpg";
import birth from "../img/birthday.jpg";
import corporate from "../img/corporate.jpg";

const Featured = ({ minHeight = false }) => {
  const featuredRef = useRef(null);
  const featuredLeftShutter = useRef(null);
  const featuredRightShutter = useRef(null);

  useGsapFeaturedLeftShutter(featuredLeftShutter, featuredRef);
  useGsapFeaturedRightShutter(featuredRightShutter, featuredRef);

  return (
    <section
      className="featured wrapper"
      ref={featuredRef}
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="services" />
      <div className="featured-wrapper">
      <div className="featured-left">
          <span>Wedding Planning</span>
          <img
            src={marr1}
            alt="couples"
          />
          <span className="left-shutter" ref={featuredLeftShutter}></span>
        </div>
        <div className="featured-right">
          <span>Wedding Decorations</span>
          <img
            src={marr2}
            alt="Women Sitting Together on the Floor"
          />
          <span className="right-shutter" ref={featuredRightShutter}></span>
        </div>
       
       
      </div>
      
    </section>
  );
};

export default Featured;
