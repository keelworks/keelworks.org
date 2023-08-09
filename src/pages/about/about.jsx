import logo_hero from "../../images/logos/global/logo-heros.png";
import JonathanStantue from "../../images/profiles/about-page/JonathanStantue-prof.jpeg";

const About = () => {
  return (
    <main className="pt-[100px] md:pt-[110px]">
      <section className=" bg-hero_about bg-cover h-[400px] w-full">
        <div className=" container_default h-full w-full flex justify-between items-center">
          <div>
            {" "}
            <h2 className=" text-5xl md:text-7xl text-white font-semibold">
              ABOUT US.
            </h2>
          </div>
          <div>
            {" "}
            <img
              className="hidden md:flex w-full h-full "
              src={logo_hero}
              alt="logo"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-full">
        <div className="container_default bg-[#e9e9e9] p-8 pt-10 mt-20 rounded-md">
          <div className="flex flex-col gap-7">
            <div className="flex justify-center border-b p-4 w-[85%] lg:w-1/2 m-auto border-black">
              <h2 className=" text-center text-2xl sm:text-3xl font-semibold font-serif">
                Our Mission Statement
              </h2>
            </div>
            <div className="flex flex-col gap-8 text-lg">
              <p>
                We support global economic equality at the individual level
                because this equality is a basis for a more peaceful and
                equitable world. We leverage full inclusion, core competence,
                and mutual support. While others feed, clothe, and house the
                hungry, the naked, and the homeless – today; we leverage full
                inclusion, mutual support, and competency development to empower
                the helpless of today to be the helpers of tomorrow.
              </p>
              <p>
                KeelWorks has no religious or political affiliation. Learning
                requires perspective, and diversity breeds perspective. Rich and
                the poor, intellectually advantaged and intellectually
                challenged: every learner brings value.
              </p>
            </div>
          </div>
        </div>

        <div className="container_default bg-[#e9e9e9] p-8 pt-10 mt-20 rounded-md">
          <div className="flex flex-col gap-7">
            <div className="flex justify-center border-b p-4 w-[85%] lg:w-1/2 m-auto border-black">
              <h2 className=" text-center text-2xl sm:text-3xl font-semibold font-serif">
                KeelWorks.. Because,
              </h2>
            </div>
            <div className="flex flex-col gap-8 text-lg">
              <p>
                The world is full of people who could achieve, but do not. We
                have a recipe and a process to support change. KeelWorks can
                change the world by leveraging competency development, community
                support, and networked intelligence.
              </p>
            </div>
          </div>
        </div>

        <div className="container_default bg-[#e9e9e9] p-8 pt-10 mt-20 rounded-md">
          <div className="flex flex-col gap-7">
            <div className="flex justify-center border-b p-4 w-[85%] lg:w-1/2 m-auto border-black">
              <h2 className=" text-center text-2xl sm:text-3xl font-semibold font-serif">
                What We Believe
              </h2>
            </div>
            <div className="flex flex-col gap-8 text-lg">
              <ul className=" list-disc pl-5">
                <li>Unrealized human potential is everyone’s loss.</li>
                <li>
                  We define who we are, not circumstances, or other people.
                </li>
                <li>Everyone wants to learn.</li>
                <li>Every learner is gifted.</li>
                <li>Together, we can do anything.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container_default bg-[#e9e9e9] p-8 pt-10 mt-20 rounded-md">
          <div className="flex flex-col gap-7">
            <div className="flex justify-center border-b p-4 w-[85%] lg:w-1/2 m-auto border-black">
              <h2 className=" text-center text-2xl sm:text-3xl font-semibold font-serif">
                KeelWorks Foundation History
              </h2>
            </div>
            <div className="flex flex-col gap-8 text-lg">
              <p>
                KeelWorks was formed in the state of Washington (USA) on the
                21st of December, 2008. KeelWorks has been supporting upward
                mobility for eight years. We have never charged a fee for
                service. Our volunteers are learning while developing the
                KeelWorks program. Short hours and changing participants yields
                glacial progress; we need to mature our fundraising to support
                professional development. We need volunteers to support fund
                raising.
              </p>
            </div>
          </div>
        </div>

        <div className="container_default bg-[#e9e9e9] p-8 pt-10 mb-20 mt-20 rounded-md">
          <div className="flex flex-col gap-7">
            <div className="flex justify-center border-b p-4 w-[85%] lg:w-1/2 m-auto border-black">
              <h2 className=" text-center text-2xl sm:text-3xl font-semibold font-serif">
                Our Values
              </h2>
            </div>
            <div className="flex flex-col gap-8 text-lg">
              <ul className=" list-disc pl-5">
                <li>
                  Honesty: Transparency, integrity, and a commitment to truth.
                </li>
                <li>Competence: The basis for individual empowerment.</li>
                <li>Diversity: More perspective, more power.</li>
                <li>
                  Community: Mutual trust and networked intelligence for the
                  greater good.
                </li>
                <li>
                  Leadership: Empowering a voice and a conscience for every
                  person in our community.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-60 bg-hero_about_bottom">
        <div className="container_default flex justify-center md:justify-between h-full px-10 items-center">
          <div>
            <h2 className=" text-4xl sm:text-5xl lg:text-7xl text-white font-serif font-semibold">
              Testimonials
            </h2>
          </div>
          <div>
            <img className="md:flex hidden" src={logo_hero} alt="logo" />
          </div>
        </div>
      </section>

      <section className="md:m-0 mt-20 w-full h-[500px]">
        <div className="container_default flex md:flex-row flex-col md:justify-between lg:justify-evenly h-full items-center space-y-5">
          <div className="font-serif">
            <div className="flex flex-col justify-center items-center space-y-2">
              <img
                className=" rounded-md bg-contain"
                width={150}
                height={150}
                src={JonathanStantue}
                alt="JonathanStantue profile"
              />
              <h2 className=" font-bold text-2xl">Jonathan Stanciu​</h2>
              <p className=" text-gray-700 font-semibold">
                Sr. Program Manager, Amazon
              </p>
            </div>
          </div>

          <div className=" max-w-sm lg:max-w-xl font-serif">
            <p className=" text-center">
              “My success is the product of several career steps, all of which
              began with my practice in instructional design at KeelWorks. I
              gained comfort with the process and learned to use the
              instructional design software, making me job-ready. I am grateful
              for KeelWorks and continue to lend my full support to the
              foundation.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
