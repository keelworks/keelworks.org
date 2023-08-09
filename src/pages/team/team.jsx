import logo_hero from "../../images/logos/global/logo-heros.png";
import muhammed from "../../images/profiles/team-page/muhammed-1.webP";
import dana_smalley from "../../images/profiles/team-page/dana_smalley-2.webP";
import Aruna from "../../images/profiles/team-page/Aruna-3.webP";
import thomas_Garrod from "../../images/profiles/team-page/thomas_Garrod-4.webP";
import sheat_isufi from "../../images/profiles/team-page/sheat_isufi-5.webP";
import Jing from "../../images/profiles/team-page/Jing-6.webP";

const Team = () => {
  return (
    <main className="pt-[100px] md:pt-[110px]">
      <section className=" bg-hero_team bg-cover bg-center h-[400px] w-full">
        <div className=" container_default h-full w-full flex justify-between items-center">
          <div>
            {" "}
            <h2 className=" text-5xl md:text-7xl text-white font-semibold">
              OUR TEAM.
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
      <section className=" space-y-10 mb-10">
        <div className="flex justify-center items-center h-40 font-serif">
          <h2 className="text-4xl font-medium">
            MEET THE <span className=" font-bold">BOARD.</span>
          </h2>
        </div>
        <section className="">
          <div className="container_default flex justify-between items-center md:flex-row flex-col">
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  h-[310px] w-[310px] bg-cover bg-profile flex items-center justify-center">
                <a target="_blank" rel="noopener" href="">
                  <img
                    className="mr-2 mb-2 rounded-full w-full h-full"
                    src={muhammed}
                    alt="muhammed pick"
                  />
                </a>
              </div>
            </div>

            <div className=" max-w-[550px] space-y-3">
              <h2 className=" font-bold text-3xl font-serif text-center">
                Muhammed Abiola
              </h2>
              <h3 className=" font-semibold text-xl text-center">
                Software Engineer
              </h3>
              <p className="">
                Muhammed Abiola comes from Nigeria and brings a unique blend of
                finance, software engineering and cloud solutions experience.
                His commitment to financial inclusion and evidence-based
                approaches to doing good aligns with the foundation's mission of
                global economic equality. Muhammed's ongoing research in
                effective altruism ensures fresh ideas and perspectives for
                charitable giving.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container_default flex justify-between items-center md:flex-row-reverse flex-col">
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  h-[310px] w-[310px] bg-cover bg-profile flex items-center justify-center">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/in/danaes"
                >
                  <img
                    className="mr-2 mb-2 rounded-full w-full h-full"
                    src={dana_smalley}
                    alt="dana pick"
                  />
                </a>
              </div>
            </div>

            <div className=" max-w-[550px] space-y-3">
              <h2 className=" font-bold text-3xl font-serif text-center">
                Dana E Smalley
              </h2>
              <h3 className=" font-semibold text-xl text-center">
                LX Designer and Team Lead
              </h3>
              <p className=" ">
                She is an Instructional Designer in the Chicago area with a
                passion for learning, researching new things, and delivering
                information to learners. Dana believes learners learn through
                application and collaboration. She favors learning communities.
                Dana loves to create content that learners can easily absorb and
                quickly put into practice. Her interest in computer based online
                learning began with a godmother who was a software engineer and
                mathematician. Dana helped her godmother develop lessons for
                math software teaching learners math. This content served
                learners as young as three years old, beginning with basic math
                and progressed as far as Calculus. This taught her the power of
                online learning.
              </p>
              <p className=" ">
                Working in the curriculum department for her local school
                district provides a wealth of knowledge about K-8 curriculum.
                For the past three years, she has worked with the KeelWorks
                foundation to expand and apply her master’s level instructional
                design learning. There, she has performed needs analysis,
                perfected her grasp on learning objectives, the chunking of
                learning, the crafting of learning strategies to match need, and
                content development both in written form, and in media. She
                loves that Instructional Design is both broad and diverse. It
                exposes her to diverse audiences, technologies, and business
                challenges; it continually broadens her knowledge. The diversity
                of skills required to meet needs is especially gratifying, from
                project management to writing copy and audio, to developing
                rollovers, simulations, video, audio, and scenarios with a wide
                array of development tools. She especially loves that creating
                learning continues to challenge her own comfort level, forcing
                her to explore new ground with every new project.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container_default flex justify-between items-center md:flex-row flex-col">
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  h-[310px] w-[310px] bg-cover bg-profile flex items-center justify-center">
                <a target="_blank" rel="noopener" href="#">
                  <img
                    className="mr-2 mb-2 rounded-full w-full h-full"
                    src={Aruna}
                    alt="aruna pick"
                  />
                </a>
              </div>
            </div>

            <div className=" max-w-[550px] space-y-3">
              <h2 className=" font-bold text-3xl font-serif text-center">
                Aruna Ghildiyal
              </h2>
              <h3 className=" font-semibold text-xl text-center">
                Project Management Lead
              </h3>

              <ul className="pl-5 md:p-0 space-y-1 list-disc">
                <li>
                  Passionate and accomplished influencer and leader with 17+
                  years of leading successful implementation of quality programs
                  from concept to execution, focused on process improvement and
                  compliance programs.
                </li>
                <li>
                  Corporate Lead auditor and Internal Audit Trainer for ISO
                  9001:2015 (Quality Management System) and ISO 14001:2015
                  (Environmental Management System).
                </li>
                <li>Strong team player and multi-tasking capability</li>
                <li>
                  Excellent communication and people skills, with an aptitude
                  for working in cross-functional teams and multi-ethnic
                  environments
                </li>
                <li>
                  Effectively managed risks, schedules, and applied mitigation
                  strategies. Led post-mortem meetings with key stakeholders.
                </li>
                <li>
                  Proven success in nurturing strategic customer relationships
                </li>
                <li>
                  Masters Degree (M Tech) in Solid Sate materials, coupled with
                  a Master’s degree (MS) in Physics with specialization in Solid
                  State Physics from highly reputed IITs (Indian Institute of
                  Technology).
                </li>
                <li>
                  Lean Six Sigma Green Belt certification from Purdue University
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container_default flex justify-between items-center md:flex-row-reverse flex-col">
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  h-[310px] w-[310px] bg-cover bg-profile flex items-center justify-center">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/in/thomasgarrod"
                >
                  <img
                    className="mr-2 mb-2 rounded-full w-full h-full"
                    src={thomas_Garrod}
                    alt="thomas pick"
                  />
                </a>
              </div>
            </div>

            <div className=" max-w-[550px] space-y-3">
              <h2 className=" font-bold text-3xl font-serif text-center">
                Thomas Garrod
              </h2>
              <h3 className=" font-semibold text-xl text-center">MEd</h3>
              <p>
                Thomas brings 20 years organizational learning consulting and
                six years leading the KeelWorks foundation. With help and
                encouragement from Robert Buchinski, Thomas founded KeelWorks in
                2008 applying his dream to enable upward mobility – especially
                for the economically disadvantaged Once a high-school dropout
                with six small children, Thomas established the foundation to
                change outcomes for underachievers like himself. His passion has
                been overseeing development of foundation learning programs and
                especially instructional design. To this end, he as developed a
                comprehensive instructional design training program and mentored
                over 300 graduate instructional designers. He is fond of saying,
                “There are no stupid learners, there is only stupid learning
                expression.” The foundation ISD program is a laboratory for
                process improvement and team development. Most board members
                came to KeelWorks for this program. In his day job, Thomas is an
                organizational development consultant supporting learning
                program enhancement and employee engagement.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container_default flex justify-between items-center md:flex-row flex-col">
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  h-[310px] w-[310px] bg-cover bg-profile flex items-center justify-center">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/in/shehatisufi"
                >
                  <img
                    className="mr-2 mb-2 rounded-full w-full h-full"
                    src={sheat_isufi}
                    alt="sheat pick"
                  />
                </a>
              </div>
            </div>

            <div className=" max-w-[550px] space-y-3">
              <h2 className=" font-bold text-3xl font-serif text-center">
                Sheat Isufi
              </h2>
              <h3 className=" font-semibold text-xl text-center">
                Web Developer
              </h3>

              <p>
                Sheat Isufi is a software engineer and entrepreneur based in
                Skopje, North Macedonia. He holds a Bachelor's degree in
                Software Engineering from "Mother Teresa" University. Currently
                working remotely as a software engineer, Sheat is passionate
                about developing innovative software products and driving
                technological advancements.
              </p>
              <p>
                With a strong drive for self-improvement and a natural aptitude
                for programming, Sheat embarked on a journey of independent
                study to pursue his dream of becoming a programmer. Along the
                way, he received invaluable guidance and support from Thomas at
                Keelworks, which played a pivotal role in shaping his career.
              </p>
              <p>
                As someone who deeply appreciates the support he received, he
                believes passionately in the KeelWorks mission and vision. Sheat
                recognizes the importance of empowering others with the dream to
                contribute to a better world. He remains dedicated to giving
                back and supporting initiatives that promote access to greater
                competence and self sufficiency.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container_default flex justify-between items-center md:flex-row-reverse flex-col">
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  h-[310px] w-[310px] bg-cover bg-profile flex items-center justify-center">
                <a target="_blank" rel="noopener" href="#">
                  <img
                    className="mr-2 mb-2 rounded-full w-full h-full"
                    src={Jing}
                    alt="jing pick"
                  />
                </a>
              </div>
            </div>

            <div className=" max-w-[550px] space-y-3">
              <h2 className=" font-bold text-3xl font-serif text-center">
                Jing Ma
              </h2>
              <h3 className=" font-semibold text-xl text-center">
                Lead Instructional Designer
              </h3>
              <p>
                Jing Ma is a native of mainland China with a decade working in
                the Chinese private educational technology industry. She played
                a leading role at a Chinese-American start-up raising capital
                from angel investors and venture capitalists. Jing shares the
                KeelWorks mission to bring everyone to the table of plenty. She
                has shown a desire to help the foundation in many ways. She is
                personally interested in exploring how finance and technology
                can bring disruptive innovation to education. Her
                entrepreneurial spirit is especially welcome to KeelWorks.
                <br />
                Jing is an instructional designer and has supported KeelWorks
                instructional design for the past two years.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Team;
