import logo_hero from "../../images/logos/global/logo-heros.png";

const Opportunity = () => {
  return (
    <main className=" space-y-9 pt-[100px] md:pt-[110px]">
      <section className=" bg-hero_opportunity position_bg_opportunity h-[400px] w-full">
        <div className=" container_default h-full w-full flex justify-between items-center">
          <div>
            {" "}
            <h2 className=" text-5xl md:text-7xl text-white font-semibold">
              Opportunity.
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
        <div className=" max-w-[67%] m-auto border-y border-black">
          <div className="flex justify-center items-center py-5">
            <h2 className=" text-2xl font-serif font-semibold">
              Volunteer/Intern and KeelWorks
            </h2>
          </div>
          <hr className="w-[60%] border-black m-auto" />
          <div className=" max-w-xl m-auto py-8">
            <p className="">
              The KeelWorks dream requires product, but KeelWorks has no paid
              staff and no fund-raising. KeelWorks volunteers have needs as
              well. Some need a mission to support, others need experience to
              prove they can do the work they are trained to do. KeelWorks
              supports career growth for new and seasoned professionals; we have
              a role for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-full">
        <div className="  max-w-[67%] m-auto border-b border-black">
          <div className="flex justify-center items-center py-5">
            <h2 className=" text-2xl font-serif font-semibold">
              What's Special About Volunteering with KeelWorks?
            </h2>
          </div>
          <hr className="w-[60%] border-black m-auto" />
          <div className="max-w-xl m-auto py-8">
            <p className="">
              KeelWorks provides process, guidelines, objective role criteria,
              and experience that will enhance your resume. Participation is
              accessible from any location with access to wide-band Internet. We
              have participants around the globe. We provide expert resume
              consulting and we support proven competence with enthusiastic
              references. KeelWorks is a good way to bridge the gap between
              education and employment.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-full">
        <div className="  max-w-[67%] m-auto border-b border-black">
          <div className="flex justify-center items-center py-5">
            <h2 className=" text-2xl font-serif font-semibold">
              Current Needs
            </h2>
          </div>
          <hr className="w-[60%] border-black m-auto" />
          <div className="max-w-xl m-auto py-8">
            <ul className=" list-disc pl-5">
              <li>Instructional Design</li>
              <li>eLearning Developer</li>
              <li>Fundraising Department Management</li>
              <li>Grant Writing</li>
              <li>Project Management</li>
              <li>Creative Service Department Manager</li>
              <li>Graphic Artist</li>
              <li>Marketing Manager</li>
              <li>Course Facilitation Manager</li>
              <li>Course Facilitators</li>
              <li>Public Relations Professional</li>
              <li>Program Managementr</li>
              <li>Program Coordinators/Admin Support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full h-full">
        <div className="  max-w-[67%] m-auto border-b border-black">
          <div className="flex justify-center items-center py-5">
            <h2 className=" text-2xl font-serif font-semibold">
              Internship Requirements
            </h2>
          </div>
          <hr className="w-[60%] border-black m-auto" />
          <div className="max-w-xl m-auto py-8">
            <ul className=" list-disc pl-5">
              <li>
                Minimum participation 3 hrs/wk (not including team meetings)
              </li>
              <li>Study to support knowledge baseline (depending on role)</li>
              <li>Weekly team contact</li>
              <li>Process compliance and participation</li>
              <li>
                Wide-band web connection (when needed, not necessarily on
                demand)
              </li>
              <li>Good teaming and leadership skills.</li>
              <li>Not required, but helpful: a gmail account.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full h-full">
        <div className=" max-w-[67%] m-auto">
          <div className="flex justify-center items-center py-5">
            <h2 className=" text-2xl font-serif font-semibold">How to apply</h2>
          </div>
          <hr className="w-[60%] border-black m-auto" />
          <div className="max-w-xl m-auto py-8">
            <p className="">
              eMail{" "}
              <a
                target="_blank"
                rel="noopener"
                className="text-[#0f6ab4] hover:text-slate-900 underline"
                href="malito:thomas.garrod@keelworks.org"
              >
                thomas.garrod[at]keelworks.org
              </a>{" "}
              explaining your interest and indicating the role. Include a copy
              of your latest resume, but don’t worry about polishing it.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Opportunity;
