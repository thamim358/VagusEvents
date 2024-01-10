import { useRef } from "react";
import {
  useGsapShutterUnveil,
  useGsapPhotoScroller,
  useGsapPhotoLevitate,
} from "../Hooks/gsap";
import table from "../img/garden-flowers-png-0.png";
import flower from "../img/flower1.png";
import flower2 from "../img/flower3.png";
import flower3 from "../img/cake.png";
import arc from "../img/bouq1.png";


const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${table})`, // Use the imported image
    backgroundSize: 'cover', // Adjust the background properties as needed
    backgroundPosition: 'center center',
  };
  const backgroundStyle12 = {
    backgroundImage: `url(${flower})`, // Use the imported image
    backgroundSize: 'cover',
     // Adjust the background properties as needed
  };
  const backgroundStyle3 = {
    backgroundImage: `url(${flower2})`, // Use the imported image
    backgroundSize: 'cover', // Adjust the background properties as needed
    backgroundPosition: 'center center',
  };
  const backgroundStyle4 = {
    backgroundImage: `url(${flower3})`, // Use the imported image
    backgroundSize: 'cover', // Adjust the background properties as needed
    backgroundPosition: 'center center',
  };
  const backgroundStyle5 = {
    backgroundImage: `url(${arc})`, // Use the imported image
    backgroundSize: 'cover', // Adjust the background properties as needed
    backgroundPosition: 'center center',
  };
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.3, heroRef);
  useGsapPhotoScroller(photosArr);
  useGsapPhotoLevitate(photosArr, heroRef);

  return (
    <section className="hero wrapper " ref={heroRef}>
      <h1 className="ethereal">
      Welcome to our <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        event management <span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          ref={photo1Ref}
          className="photo one" 
          style={backgroundStyle}
        ></div>
        <div
          ref={photo2Ref}
          className="photo two"
          style={backgroundStyle12}
        ></div>
        <div
          ref={photo3Ref}
          className="photo three"
          style={backgroundStyle3}
        ></div>
        <div
          ref={photo4Ref}
          className="photo four"
          style={backgroundStyle4}
        ></div>
        <div
          ref={photo5Ref}
          className="photo five"
            style={backgroundStyle5}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
