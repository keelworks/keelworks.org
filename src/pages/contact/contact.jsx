import logo_hero from "../../images/logos/global/logo-heros.png";
import { handleSubmit } from "../../features/contact/contactSlice";
import { useSelector, useDispatch } from "react-redux";

const Contact = () => {
  const { submit } = useSelector((store) => store.contact);
  const dispatch = useDispatch();
  return (
    <main className=" space-y-7 pt-[100px] md:pt-[110px]">
      <section className=" bg-hero_contact bg-cover bg-center h-[400px] w-full">
        <div className=" container_default h-full w-full flex justify-between items-center">
          <div>
            {" "}
            <h2 className=" text-5xl md:text-7xl text-white font-semibold">
              CONTACT US.
            </h2>
          </div>
          <div>
            {" "}
            <img
              className="hidden md:flex w-full h-full"
              src={logo_hero}
              alt="logo"
            />
          </div>
        </div>
      </section>
      <section className="h-full w-full">
        <div className="container_default my-20 flex flex-col md:flex-row gap-12 md:gap-0 ">
          <div className=" w-full md:w-[70%] flex justify-between items-center">
            <div className="w-full flex justify-center items-center">
              <div className="flex flex-col justify-center font-semibold items-center space-y-5">
                <h3 className=" text-3xl font-serif">HEADQUARTERS</h3>
                <p className=" text-lg">KeelWorks – Oak Harbor, WA, USA</p>
                <h3 className=" text-3xl font-serif">Europe Office</h3>
                <p className="text-lg">Coming Soon</p>
              </div>
            </div>
          </div>

          <div className="w-full space-y-3 flex flex-col justify-center items-center">
            <div>
              <h3 className="text-3xl font-serif font-semibold">
                Drop Us A Message
              </h3>
            </div>
            <form
              className="w-full px-5 space-y-5"
              action="https://formsubmit.co/thomas.garrod@keelworks.org"
              method="POST"
              onSubmit={() => {
                dispatch(handleSubmit());
                alert(
                  "thanks for the message, help us know you are not a robot and your message will be sent :)"
                );
              }}
            >
              <div className="">
                <label htmlFor="name">
                  <input
                    placeholder="Name"
                    className="border-black border w-full h-10 pl-2 rounded tex"
                    id="name"
                    type="text"
                    name="name"
                    required
                  />
                </label>
              </div>
              <div>
                <label htmlFor="email">
                  <input
                    placeholder="Email: axample@gmail.com"
                    className="border-black border w-full h-10 pl-2 rounded"
                    id="email"
                    type="text"
                    name="email"
                    required
                  />
                </label>
              </div>
              <div>
                <label htmlFor="message">
                  <textarea
                    placeholder="How can we help you?"
                    className="border-black border w-full p-2 rounded h-52"
                    id="message"
                    type="text"
                    name="message"
                    required
                  />
                </label>
              </div>
              <div>
                <input
                  type="submit"
                  className=" cursor-pointer h-10 w-20 bg-black/80 text-white rounded"
                  value={`Submit${submit ? "..." : ""}`}
                  disabled={submit ? true : false}
                />
              </div>
              <input
                type="hidden"
                name="_next"
                value="https://keelworks.org/contact"
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
