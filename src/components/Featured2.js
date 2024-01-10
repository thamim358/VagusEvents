import { useRef } from "react";
import {
  useGsapFeaturedLeftShutter,
  useGsapFeaturedRightShutter,
} from "../Hooks/gsap";
import SectionTitle from "./SectionTitle";
import birth from "../img/birthday.jpg";
import corporate from "../img/corporate.jpg";

const Featured2 = ({ minHeight = false }) => {
  const featuredRef = useRef(null);
  const featuredLeftShutter = useRef(null);
  const featuredRightShutter = useRef(null);

  useGsapFeaturedLeftShutter(featuredLeftShutter, featuredRef);
  useGsapFeaturedRightShutter(featuredRightShutter, featuredRef);

  return (
    <div
      className="featured wrapper"
      ref={featuredRef}
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <div className="featured-wrapper">
      <div className="featured-left">
          <span>birthday parties</span>
          <img
            src={birth}
            alt="couples"
          />
          <span className="left-shutter" ref={featuredLeftShutter}></span>
        </div>
        <div className="featured-right">
          <span>MICE Events </span>
          <img
            src={corporate}
            alt="Women Sitting Together on the Floor"
          />
          <span className="right-shutter" ref={featuredRightShutter}></span>
        </div>
       
       
      </div>
      
    </div>
  );
};

export default Featured2;
