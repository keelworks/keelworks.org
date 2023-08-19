import { useEffect, useRef } from "react";
import {
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
} from "../../images/icons/social-media-incons/icons";
import hero_home_icon from "../../images/icons/home/hero-home-icon.png";
import adobe_logo from "../../images/logos/home/adobe-logo.png";
import eduongo_logo from "../../images/logos/home/eduongo-logo.png";
import teamgantt_logo from "../../images/logos/home/teamgantt-logo.jpg";
import cogniaha_logo from "../../images/logos/home/cogniaha-logo.png";
import knowace_logo from "../../images/logos/home/knowace-logo.png";
import microsoft_logo from "../../images/logos/home/microsoft-logo.png";
import { CaretRight, CaretUp } from "../../images/icons/home/icons";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import {
  text1,
  text2,
  text3,
  taggleYoutube,
} from "../../features/home/homeSlice";
import { Close } from "../../images/icons/navbar/icons";

export const Home = () => {
  const { isOpenText1, isOpenText2, isOpenText3, isOpenYoutube } = useSelector(
    (store) => store.home
  );
  const dispatch = useDispatch();

  //hidden youtube video
  const videoRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        dispatch(taggleYoutube(false));
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  //**

  return (
    <main className=" pt-[100px] md:pt-[110px]">
      <section className=" bg-cover bg-center h-screen w-full bg-hero_home">
        <div className="container_default h-full flex justify-between items-center">
          <div className=" max-w-md space-y-10">
            <h3 className="text-2xl md:text-3xl">
              Contact us on social network
            </h3>
            <div className="flex gap-10 text-2xl">
              <a
                target="_blank"
                aria-label="youtube link"
                rel="noopener"
                className=" hover:scale-110 transition-all ease-in-out duration-300"
                href="https://www.youtube.com/channel/UC71oRtac-2I0bLO2Mddg5EQ"
              >
                <Youtube />
              </a>
              <a
                target="_blank"
                rel="noopener"
                aria-label="instagram link"
                className=" hover:scale-110 transition-all ease-in-out duration-300"
                href="https://www.instagram.com/thekeelworks/"
              >
                <Instagram />
              </a>
              <a
                target="_blank"
                rel="noopener"
                aria-label="twitter link"
                className=" hover:scale-110 transition-all ease-in-out duration-300"
                href="https://twitter.com/KeelworksThe"
              >
                <Twitter />
              </a>
              <a
                target="_blank"
                rel="noopener"
                aria-label="linkedin link"
                className=" hover:scale-110 transition-all ease-in-out duration-300"
                href="https://www.linkedin.com/company/keelworks-foundation/"
              >
                <Linkedin />
              </a>
              <a
                target="_blank"
                rel="noopener"
                aria-label="facebook link"
                className=" hover:scale-110 transition-all ease-in-out duration-300"
                href="https://www.facebook.com/TheKeelWorks"
              >
                <Facebook />
              </a>
            </div>
            <h2 className="text-6xl md:text-7xl font-semibold">
              TESTE, WE CAN DO ANYTHING.
            </h2>
            <button
              ref={videoRef}
              onClick={() => dispatch(taggleYoutube(true))}
              className="grow_box w-72"
            >
              Watch "Welcome to Keelworks"
            </button>
            {isOpenYoutube && (
              <div className=" fixed bottom-0 right-0 flex justify-center items-center bg-black/30 z-50 h-full w-full">
                <div>
                  <p className=" w-[105%] text-2xl text-end">
                    <span className="flex justify-end cursor-pointer">
                      <Close />
                    </span>
                  </p>
                  <ReactPlayer
                    className="md:hidden"
                    width={300}
                    height={200}
                    url="https://youtu.be/2Stgu6EcG60"
                  />
                  <ReactPlayer
                    className="hidden md:flex"
                    url="https://youtu.be/2Stgu6EcG60"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="lg:flex hidden">
            <img
              src={hero_home_icon}
              className="rounded-full h-[500px] w-[500px]"
              alt="hero-icon"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-full pt-12">
        <div className="container_default space-y-7 px-5">
          <div className="flex w-full justify-center">
            <h2 className=" text-[#0f6ab4] text-center text-3xl md:text-4xl font-bold pb-5">
              The KeelWorks Foundation
            </h2>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-3">
              <div className="flex">
                <div
                  onClick={() => dispatch(text1())}
                  className={`flex items-center gap-3 cursor-pointer ${
                    isOpenText1 ? "" : "text-[#0f6ab4]"
                  }`}
                >
                  <span className=" bg-white bg-clip-text ">
                    {isOpenText1 ? <CaretUp /> : <CaretRight />}
                  </span>
                  <p>What is KeelWorks?</p>
                </div>
              </div>

              <div
                className={`${
                  isOpenText1 ? " h-28 md:h-20" : "h-0"
                }    transition-height duration-500 overflow-hidden`}
              >
                <div>
                  <p>
                    KeelWorks is a 501c3 charitable foundation dedicated to
                    bringing as many as possible to share in the game of
                    contributing and benefiting. We believe those who do not
                    currently contribute are costing us in unrealized
                    contributions. They would like to be contributing, and we
                    can help them.{" "}
                    <a
                      className="text-[#0f6ab4] underline"
                      href="https://www.youtube.com/watch?v=oKqWjtG31r0"
                      aria-label="youtube link"
                      target="_blank"
                      rel="noopener"
                    >
                      Click here
                    </a>{" "}
                    to learn more.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <div className="flex">
                <div
                  onClick={() => dispatch(text2())}
                  className={`flex items-center gap-3 cursor-pointer ${
                    isOpenText2 ? "" : "text-[#0f6ab4]"
                  }`}
                >
                  <span>{isOpenText2 ? <CaretUp /> : <CaretRight />}</span>
                  <p>What Audiences Need KeelWorks?</p>
                </div>
              </div>

              <div
                className={`${
                  isOpenText2 ? "h-24 md:h-16" : "h-0"
                }   backdrop-filter backdrop-blur-sm transition-height duration-500 ease-in-out overflow-hidden`}
              >
                <p>
                  We hope to serve a wide range of audiences, including
                  recovering addicts, felons, refugees, displaced homemakers,
                  and individuals in endemically disadvantaged communities. The
                  list of applicable audiences is endless. If they are excluded,
                  we can change that.{" "}
                  <a
                    className="text-[#0f6ab4] underline"
                    href="https://www.youtube.com/watch?v=sXow3b8okX8"
                    aria-label="youtube link"
                    target="_blank"
                    rel="noopener"
                  >
                    Click here
                  </a>{" "}
                  to learn more.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <div className="flex">
                <div
                  onClick={() => dispatch(text3())}
                  className={`flex items-center gap-3 cursor-pointer ${
                    isOpenText3 ? "" : "text-[#0f6ab4]"
                  }`}
                >
                  <span>{isOpenText3 ? <CaretUp /> : <CaretRight />}</span>
                  <p>Our Secret Sauce</p>
                </div>
              </div>

              <div
                className={`${
                  isOpenText3 ? "h-24 md:h-20" : "h-0"
                }   backdrop-filter backdrop-blur-sm transition-height duration-500 ease-in-out overflow-hidden`}
              >
                <p>
                  The KeelWorks foundation supports change with assessment for
                  special needs, small mutually supportive teams, core
                  competency learning and development, databases with lessons
                  learned for common needs like how to pick a school, get a
                  scholarship, or find a job, and structure for long-term team
                  persistence.{" "}
                  <a
                    className="text-[#0f6ab4] underline"
                    href="https://www.youtube.com/watch?v=vwmZxY7dbBI"
                    aria-label="youtube link"
                    target="_blank"
                    rel="noopener"
                  >
                    Click here
                  </a>{" "}
                  to learn more.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <h3 className="text-lg">KeelWorks Sponsors</h3>
          </div>
          <div className="flex flex-col md:gap-10 items-center md:flex-row  md:justify-evenly ">
            <a
              aria-label="adobe link"
              target="_blank"
              rel="noopener"
              href="https://www.adobe.com/"
            >
              <img
                className="object-contain w-48 h-48 md:w-32 md:h-32"
                src={adobe_logo}
                alt=""
              />
            </a>
            <a
              aria-label="eduongo link"
              target="_blank"
              rel="noopener"
              href="https://eduongo.com/"
            >
              <img
                className="object-contain w-48 h-48 md:w-32 md:h-32"
                src={eduongo_logo}
                alt="eduongo_logo"
              />
            </a>
            <a
              aria-label="teamgantt link"
              target="_blank"
              rel="noopener"
              href="https://www.teamgantt.com/"
            >
              <img
                className="object-contain w-48 h-48 md:w-32 md:h-32"
                src={teamgantt_logo}
                alt="teamgantt_logo"
              />
            </a>
            <a
              aria-label="cogniaha link"
              target="_blank"
              rel="noopener"
              href="https://cogniaha.com/"
            >
              <img
                className="object-contain w-48 h-48 md:w-32 md:h-32"
                src={cogniaha_logo}
                alt="cogniaha_logo"
              />
            </a>
            <a
              aria-label="knowace link"
              target="_blank"
              rel="noopener"
              href="https://www.knowence.eu/en/"
            >
              <img
                className="object-contain w-48 h-48 md:w-32 md:h-32"
                src={knowace_logo}
                alt="knowace_logo"
              />
            </a>
            <a
              aria-label="microsoft link"
              target="_blank"
              rel="noopener"
              href="https://www.microsoft.com/en-us"
            >
              <img
                className="object-contain w-48 h-48 md:w-32 md:h-32"
                src={microsoft_logo}
                alt="microsoft_logo"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
