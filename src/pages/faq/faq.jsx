import logo_hero from "../../images/logos/global/logo-heros.png";
import { AngleDown, AngleUp } from "../../images/icons/faq/icons";
import { askedQuestions } from "../../features/faq/faqSlice";
import { useSelector, useDispatch } from "react-redux";

const Faq = () => {
  const { isOpenAskedQuestions } = useSelector((store) => store.faq);
  const dispatch = useDispatch();

  return (
    <main className=" space-y-7 pt-[100px] md:pt-[110px]">
      <section className=" bg-hero_faq position_bg_faq h-[400px] w-full">
        <div className=" container_default h-full w-full flex justify-between items-center">
          <div>
            {" "}
            <h2 className=" text-5xl md:text-7xl text-white font-semibold">
              FAQ.
            </h2>
          </div>
          <div>
            {" "}
            <img
              className=" w-full h-full hidden md:flex"
              src={logo_hero}
              alt="logo"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-full">
        <div className=" container_default">
          <div className="flex justify-center pt-10 items-center h-full">
            <h2 className="text-center md:text-left  text-3xl font-serif font-semibold">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="pt-10 pb-20">
            <div className="bg-lines_transparent pb-3 bg-[#D5D5D5DB] rounded-md font-serif font-semibold">
              <div>
                <div className="px-5 pb-3 pt-5  ">
                  <div
                    onClick={() => dispatch(askedQuestions(0))}
                    className="flex items-center cursor-pointer"
                  >
                    <p>
                      {" "}
                      <span className="inline-block relative top-1">
                        {" "}
                        {isOpenAskedQuestions[0] ? <AngleUp /> : <AngleDown />}
                      </span>{" "}
                      FAQ?
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    isOpenAskedQuestions[0] ? " h-36 md:h-20" : "h-0"
                  }    transition-height duration-500 overflow-hidden mx-2 bg-[#bfbfbf]`}
                >
                  <div className=" font-normal p-4">
                    <p>
                      Meaningful FAQs are built from the questions people ask.
                      That is what we have here. Please email your questions and
                      we will add them with answers to this.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="px-5 pb-3 pt-5  ">
                  <div
                    onClick={() => dispatch(askedQuestions(1))}
                    className="flex items-center cursor-pointer"
                  >
                    <p>
                      {" "}
                      <span className="inline-block relative top-1">
                        {" "}
                        {isOpenAskedQuestions[1] ? <AngleUp /> : <AngleDown />}
                      </span>{" "}
                      Why Web-based?
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    isOpenAskedQuestions[1] ? " h-40 md:h-20" : "h-0"
                  }    transition-height duration-500 overflow-hidden mx-2 bg-[#bfbfbf]`}
                >
                  <div className=" font-normal p-4">
                    <p>
                      This approach allows us to reach more in need. We believe
                      we can do more and do it better this way. We also value
                      face-to-face interactions, but we know this is expensive
                      and would severely limit participation.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="px-5 pb-3 pt-5  ">
                  <div
                    onClick={() => dispatch(askedQuestions(2))}
                    className="flex items-center cursor-pointer"
                  >
                    <p className="">
                      <span className="inline-block relative top-1">
                        {" "}
                        {isOpenAskedQuestions[2] ? <AngleUp /> : <AngleDown />}
                      </span>{" "}
                      How will the economically disadvantaged participate in a
                      program requiring computers and web access?
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    isOpenAskedQuestions[2] ? "h-20" : "h-0"
                  }    transition-height duration-500 overflow-hidden mx-2 bg-[#bfbfbf]`}
                >
                  <div className=" font-normal p-4">
                    <p>
                      We will depend greatly on corporate sponsorships,
                      donations, and grants.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="px-5 pb-3 pt-5  ">
                  <div
                    onClick={() => dispatch(askedQuestions(3))}
                    className="flex items-center cursor-pointer"
                  >
                    <p>
                      <span className="inline-block relative top-1">
                        {" "}
                        {isOpenAskedQuestions[3] ? <AngleUp /> : <AngleDown />}
                      </span>{" "}
                      What is the market for your product?
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    isOpenAskedQuestions[3] ? "h-36" : "h-0"
                  }    transition-height duration-500 overflow-hidden mx-2 bg-[#bfbfbf]`}
                >
                  <div className=" font-normal p-4">
                    <p>
                      We hear this question a lot. People think of this as a
                      business. It isn’t, but we will answer the question
                      anyway. The need for a comprehensive approach to
                      under-achievement is everywhere. Every parent believes
                      their child can do better, and in fact they can. Of much
                      greater concern are the many bright students who for one
                      reason and another fail. Some are more obvious failures
                      than others. KeelWorks knows that some excellent students
                      participate for grades rather than learning. We want to
                      help these learners too. Many learners give up thinking
                      there is no hope for change or success. We believe we can
                      help these learners
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="px-5 pb-3 pt-5  ">
                  <div
                    onClick={() => dispatch(askedQuestions(4))}
                    className="flex items-center cursor-pointer"
                  >
                    <p>
                      <span className="inline-block relative top-1">
                        {" "}
                        {isOpenAskedQuestions[4] ? <AngleUp /> : <AngleDown />}
                      </span>{" "}
                      How Does KeelWorks Fund Programs? How Does KeelWorks Fund
                      Programs?
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    isOpenAskedQuestions[4] ? "h-24" : "h-0"
                  }    transition-height duration-500 overflow-hidden mx-2 bg-[#bfbfbf]`}
                >
                  <div className=" font-normal p-4">
                    <p>
                      This is a good question. To date we’ve operated with
                      volunteers and graduate interns. Progress has been
                      unacceptably slow. We don’t have a fundraising department.
                      We’ve always felt we needed product before could in good
                      conscious ask for money. The foundation recognizes a need
                      to pursue real fundraising.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-5">
            <p className=" text-black/60">
              The questions displayed are the most asked questions. If your
              question is not listed, please use this{" "}
              <a
                className="text-[#0f6ab4] underline hover:text-slate-900"
                href="https://keelworks.org/contact"
              >
                contact form.
              </a>{" "}
              We will be happy, answering your questions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faq;
