import { Link, useLocation } from "react-router-dom";
import keelworks_navbar from "../../images/logos/navbar/keelworks-navbar-logo.webP";
import { Bars, Close } from "../../images/icons/navbar/icons";

import { useDispatch, useSelector } from "react-redux";
import { toggleNavBar } from "../../features/navbar/navbarSlice";

const Navbar = () => {
  const location = useLocation().pathname;

  const { isOpenNavBar } = useSelector((store) => store.navbar);
  const dispatch = useDispatch();
  console.log(isOpenNavBar);

  return (
    <nav className=" bg-white fixed w-full z-50 h-[100px] md:h-[110px]">
      <div className=" container_default h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/">
            <img
              className=""
              src={keelworks_navbar}
              width={210}
              height={210}
              alt="keelworks_navbar"
            />
          </Link>
          <div>
            <ul className="hidden lg:flex space-x-5 font-semibold items-center">
              <li>
                <Link to="/" className=" hover:text-[#0f6ab4] ">
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="about-us"
                  className={`${
                    location === "/about-us" && "text-[#0f6ab4]"
                  } hover:text-[#0f6ab4] `}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="team"
                  className={`${
                    location === "/team" && "text-[#0f6ab4]"
                  } hover:text-[#0f6ab4] `}
                >
                  TEAM
                </Link>
              </li>
              <li>
                <Link
                  to="opportunity"
                  className={`${
                    location === "/opportunity" && "text-[#0f6ab4]"
                  } hover:text-[#0f6ab4] `}
                >
                  OPPORTUNITY
                </Link>
              </li>
              <li>
                <Link
                  to="faq"
                  className={`${
                    location === "/faq" && "text-[#0f6ab4]"
                  } hover:text-[#0f6ab4] `}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className={`${
                    location === "/contact" && "text-[#0f6ab4]"
                  } hover:text-[#0f6ab4] `}
                >
                  CONTACT
                </Link>
              </li>
              <li>
                {" "}
                <Link to="get-involved" className="black_btn">
                  GET INVOLVED!
                </Link>
              </li>
            </ul>
            <div
              onClick={() => dispatch(toggleNavBar())}
              className="flex lg:hidden"
            >
              <div>
                <button
                  aria-label="navbar buttton, close/open"
                  className=" w-6 h-6"
                >
                  {isOpenNavBar ? <Close /> : <Bars />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpenNavBar && (
        <div className="lg:hidden bg-white z-50 w-full pb-2 absolute">
          <div
            onClick={() => dispatch(toggleNavBar())}
            className="container_default"
          >
            <ul className=" font-semibold">
              <li>
                <Link
                  to="/"
                  className="w-full inline-block hover:text-[#0f6ab4] pb-2"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="about-us"
                  className={`${
                    location === "/about-us" && "text-[#0f6ab4]"
                  } hover:text-[#0f6ab4] w-full inline-block pb-2`}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="team"
                  className={`${
                    location === "/team" && "text-[#0f6ab4]"
                  } hover:text-[#0f6ab4] w-full inline-block pb-2`}
                >
                  TEAM
                </Link>
              </li>

              <li>
                <Link
                  to="opportunity"
                  className={`${
                    location === "/opportunity" && "text-[#0f6ab4]"
                  } hover:text-[#0f6ab4] w-full inline-block pb-2`}
                >
                  OPPORTUNITY
                </Link>
              </li>
              <li>
                <Link
                  to="faq"
                  className={`${
                    location === "/faq" && "text-[#0f6ab4]"
                  } hover:text-[#0f6ab4] w-full inline-block pb-2`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className={`${
                    location === "/contact" && "text-[#0f6ab4]"
                  } hover:text-[#0f6ab4] w-full inline-block pb-2`}
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  to="get-involved"
                  className={`${
                    location === "/get-involved" && "text-[#0f6ab4]"
                  } hover:text-[#0f6ab4] w-full inline-block pb-2`}
                >
                  GET INVOLVED!
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
