import SectionTitle from "./SectionTitle";
import { useRef } from "react";
import { IconMail,IconPhoneCalling,IconLocation} from "@tabler/icons-react";
import { useGsapLeftWalking } from "../Hooks/gsap";
const Favourites = ({ minHeight }) => {
  const secTitle = useRef(null);

  useGsapLeftWalking(secTitle);

  return (
    <section
      className="favourites wrapper"
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="Contact Us" />
      <div className="flex flex-col justify-center items-center md:flex-row  font-sans">
          <div className=" mr-10 justify-self-center md:justify-center"ref={secTitle}>

              <div className="flex mt-5 ">
                <div className=" p-2">
                  <IconMail
                    className=""
                    size={40}
                    style={{ color: "#FFFFFF " }}
                  />
                </div>
                <div className="px-3 flex flex-col wow fadeInUp">
                  <div className="text-[#FFFFFF] font-semibold text-lg ">
                    Email Address
                  </div>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox"
                    className="text-black font-medium text-lg"
                  >
                   info@sumadula.com
                  </a>
                </div>
              </div>
              <div className="flex  mt-3 wow fadeInUp">
                <div className=" p-2">
                  <IconPhoneCalling
                    className=""
                    size={40}
                    style={{ color: "#FFFFFF " }}
                  />
                </div>
                <div className="px-3 flex flex-col wow fadeInUp">
                  <div className="text-[#FFFFFF] font-semibold text-lg ">
                    Phone Number
                  </div>
                  <div className="text-black font-medium text-lg">
                  +91 9920617183/88 
                  </div>
                </div>
              </div>
              <div className="flex  mt-3 wow fadeInUp">
                <div className=" p-2">
                  <IconLocation
                    className=""
                    size={40}
                    style={{ color: "#FFFFFF " }}
                  />
                </div>
                <div className="px-3 flex flex-col mt-3">
                  <div className="text-[#FFFFFF] font-semibold text-lg ">
                    Location
                  </div>
                  <div className="text-black font-medium text-lg">
                  306 B, Venus Building Lokhandwala 1sr Crossroad, Swami Samartha Nagar,

                  </div>
                  <div className="text-black font-medium text-lg">
                  Lokhandwala Complex, Andheri West,
                  </div>
                  <div className="text-black0 font-medium text-lg">
                  Mumbai, Maharashtra 400053, India
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-5 sm:mx-5 md:w-3/5 lg:px-10 tracking-wider wow fadeInUp">
              <div className="bg-white rounded-lg drop-shadow-lg p-4 ring-1 ring-[#FFC500 ]">
                <div className="lg:aspect-w-20 aspect-h-20 aspect-video">
                  <iframe
                    className="w-full h-full lg:w-100 lg:h-70"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2657530988117!2d72.82317167359261!3d19.13984104996836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b617b6b4b6cd%3A0xe3b05c9ce52bd21f!2sLokhandwala%20Complex%20Andheri%20West!5e0!3m2!1sen!2sin!4v1700741553391!5m2!1sen!2sin"
                  />
                </div>
              
              </div>
            </div>

            {/* <Col size={12} md={6}> */}

          
            {/* </Col> */}
          </div>
    </section>
  );
};

export default Favourites;
