"use client";
import Image from "next/image";
import SectionHeader from "../../../components/Common/SectionHeader";
// import { RainbowButton } from "@/components/ui/rainbow-button";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Simple Pricing`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                ₹7999{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /Monthly
                </span>
                <span className="ml-1 text-sm text-waterloo dark:text-manatee">
                  +18% GST
                </span>
              </h3>

              <div className="mt-9 w-full border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4  text-black last:mb-0 dark:text-manatee">
                    Completely Automated
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Trades Indices
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Account Opening (Optional)
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    1 Strategy Coding
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    WhatsApp Support
                  </li>{" "}
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Remote Support
                  </li>{" "}
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Rs 1,000 per month maintenance charge
                  </li>
                </ul>
              </div>
              <button
                data-modal-target="static-modal"
                data-modal-toggle="static-modal"
                className="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Buy now
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                ₹19999{" "}
                <span className="w-full text-sm text-waterloo dark:text-manatee">
                  /Quarterly
                  <span className="ml-2 text-sm text-waterloo dark:text-manatee">
                    +18% GST
                  </span>
                </span>
              </h3>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4  text-black last:mb-0 dark:text-manatee">
                    Completely Automated
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Trades Indices
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Account Opening (Optional)
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    2 Strategy Coding
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    WhatsApp Support
                  </li>{" "}
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Remote Support
                  </li>{" "}
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Rs 1,000 per month maintenance charge
                  </li>
                </ul>
              </div>

              <button
                data-modal-target="static-modal"
                data-modal-toggle="static-modal"
                className="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Buy now
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                ₹29999{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /Half Year
                </span>
                <span className="ml-1 text-sm text-waterloo dark:text-manatee">
                  +18% GST
                </span>
              </h3>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4  text-black last:mb-0 dark:text-manatee">
                    Completely Automated
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Trades Indices
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Account Opening (Optional)
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    3 Strategy Coding
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    WhatsApp Support
                  </li>{" "}
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Remote Support
                  </li>{" "}
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Rs 1,000 per month maintenance charge
                  </li>
                </ul>
              </div>

              <button
                data-modal-target="static-modal"
                data-modal-toggle="static-modal"
                className="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Buy now
              </button>
            </div>
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                ₹49999{" "}
                <span className="text-sm text-waterloo dark:text-manatee">
                  /Yearly
                </span>
                <span className="text-sm text-waterloo dark:text-manatee">
                  +18% GST
                </span>
              </h3>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4  text-black last:mb-0 dark:text-manatee">
                    Completely Automated
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Trades Indices
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Account Opening (Optional)
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    3 Strategy Coding
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    WhatsApp Support
                  </li>{" "}
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Remote Support
                  </li>{" "}
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Rs 1,000 per month maintenance charge
                  </li>
                </ul>
              </div>

              {/*  */}
              <button
                data-modal-target="static-modal"
                data-modal-toggle="static-modal"
                className="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
