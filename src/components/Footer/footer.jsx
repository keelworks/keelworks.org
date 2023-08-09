import {
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
} from "../../images/icons/social-media-incons/icons";

const Footer = () => {
  return (
    <footer className="w-full h-[100px] md:h-[87px]">
      <div className="container_default h-full border-t-2">
        <div className="flex flex-col justify-evenly md:flex-row md:justify-between items-center h-full w-full lg:px-5">
          <div className="flex gap-10 lg:gap-14 text-2xl">
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
          <div>
            <span>
              <b>KeelWorks </b>© 2023 | All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
