import {
  Donate,
  GoFundme,
  PayPal,
} from "../../images/icons/get-involved/icons";
import logo_hero from "../../images/logos/global/logo-heros.png";

const GetInvolved = () => {
  return (
    <main className=" space-y-7 pt-[100px] md:pt-[110px]">
      <section className=" bg-hero_get_involved bg-cover bg-center h-[400px] w-full">
        <div className=" container_default h-full w-full flex justify-between items-center">
          <div>
            {" "}
            <h2 className=" text-5xl md:text-7xl text-white font-semibold">
              GET INVOLVED!
            </h2>
          </div>
          <div>
            {" "}
            <img className="hidden md:flex" src={logo_hero} alt="logo" />
          </div>
        </div>
      </section>
      <section className="w-full h-full">
        <div className="container_default">
          <div className=" h-32 flex justify-center items-center">
            <h2 className="text-center md:text-left md:text-3xl text-2xl font-semibold font-serif">
              Supporting The KeelWorks Foundation
            </h2>
          </div>
          <div className=" space-y-3">
            <h3 className=" font-serif font-semibold md:text-lg text-xl">
              Be A Part of Change
            </h3>
            <p>
              {" "}
              We have a sustainable life, with disposable income. We are in the
              lifeboat: they are without. Even if you lack compassion for
              others, consider sustainability of imbalance. The numbers
              splashing outside the boat grows larger every day. They are in
              unstable nations, they are in refugee camps, they are in war
              ravaged lands, they are in Los Angeles – on the street. They are
              people of color outside the white privilege umbrella, they have a
              history of incarceration, substance abuse, or are noticeably
              different. They lack skills, education, or other qualifications.
              They need a path to sustainability.{" "}
            </p>
            <p>
              KeelWorks is building a structure providing a path to
              sustainability. We need your help.
            </p>
            <p>
              We need to have services up and running by the end of 2022. We are
              halfway there, but we need to up our game. We are 100% volunteer
              now, but unpaid volunteers come and go, and we need a stable
              skeleton staff to complete our program. Once developed, our
              foundation will be self-sustaining. Can you help us get there?
            </p>
            <p>
              Help us build hope for a sustainable future. Give till it hurts.
            </p>
          </div>
          <div className="w-full my-10 gap-5 flex flex-col md:flex-row justify-center items-center">
            <div className="mt-3">
              <a
                className="w-10 h-10"
                aria-label="paypal link"
                target="_blank"
                rel="noopener"
                href="https://www.paypal.com/paypalme/KeelWorks"
              >
                <PayPal />
              </a>
              <a
                className="flex justify-center items-center"
                aria-label="paypal link"
                target="_blank"
                rel="noopener"
                href="https://www.paypal.com/paypalme/KeelWorks"
              >
                <Donate />
              </a>
            </div>

            <div className=" w-56">
              <a
                className="flex justify-center items-center"
                target="_blank"
                aria-label="GoFundme link"
                rel="noopener"
                href="https://www.gofundme.com/f/thomas039s-campaign-for-keelworks-foundation?utm_campaign=p_lico+share-sheet&utm_medium=copy_link&utm_source=customer"
              >
                <GoFundme />
              </a>
              <a
                className="flex justify-center items-center"
                target="_blank"
                aria-label="GoFundme link"
                rel="noopener"
                href="https://www.gofundme.com/f/thomas039s-campaign-for-keelworks-foundation?utm_campaign=p_lico+share-sheet&utm_medium=copy_link&utm_source=customer"
              >
                <Donate />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetInvolved;
