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
                description: `Tailored Pricing for Every Goal, Ensuring the Right Plan for Your Unique Needs`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative  mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
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
            <div className="animate_top group relative rounded-lg flex flex-col items-center border border-gray-300 bg-gradient-to-b from-blue-50 to-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:border-gray-700 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 md:w-[45%] lg:w-1/3 xl:p-6">
  {/* Title */}
  <h1 className="w-full flex justify-evenly text-2xl mb-4 text-blue-700 dark:text-blue-400">
    <p>Prime</p>
  </h1>

  {/* Price Section */}
  <div className="mb-8 p-6 w-full text-center bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-md dark:from-gray-700 dark:to-gray-800 dark:shadow-none">
    <h3 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400">
      ₹7999
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      /Monthly{" "}
      <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
        +18% GST
      </span>
    </p>
  </div>

  {/* Features List */}
  <div className="mt-9 w-full border-t border-gray-300 pb-12.5 pt-9 dark:border-gray-700">
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          ⚡️ <span className="ml-2">Auto Trading</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📊 <span className="ml-2">Quantity Restriction</span>
        </span>
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">4</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          🛠️ <span className="ml-2">Develop Your Own Strategies</span>
        </span>
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">1</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📈 <span className="ml-2">Number of Stock Scripts</span>
        </span>
        <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">10</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📉 <span className="ml-2">Number of MCX Strategies</span>
        </span>
        <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded dark:bg-red-900 dark:text-red-300">0</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📞 <span className="ml-2">Executive Support</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          💬 <span className="ml-2">WhatsApp Support</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          👨‍💻 <span className="ml-2">Expert Support</span>
        </span>
      </li>
    </ul>
  </div>

  {/* Buy Button */}
  <button
    data-modal-target="static-modal"
    data-modal-toggle="static-modal"
    className="block rounded-lg bg-blue-600 px-5 py-2.5 text-center absolute bottom-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
    type="button"
  >
    Buy now
  </button>
</div>



            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg flex flex-col items-center border border-gray-300 bg-gradient-to-b from-blue-50 to-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:border-gray-700 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 md:w-[45%] lg:w-1/3 xl:p-6">
  {/* Popular Badge */}
  <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-blue-600 px-4.5 py-1.5 text-xs font-medium uppercase text-white dark:bg-blue-500">
    Popular
  </div>

  {/* Title */}
  <h1 className="w-full flex justify-evenly text-2xl mb-4 text-blue-700 dark:text-blue-400">
    <p>Elite</p>
  </h1>

  {/* Price Section */}
  <div className="mb-8 p-6 w-full text-center bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-md dark:from-gray-700 dark:to-gray-800 dark:shadow-none">
    <h3 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400">
      ₹19999
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      /Quarterly{" "}
      <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
        +18% GST
      </span>
    </p>
  </div>

  {/* Features List */}
  <div className="mt-9 w-full border-t border-gray-300 pb-12.5 pt-9 dark:border-gray-700">
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          ⚡️ <span className="ml-2">Auto Trading</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📊 <span className="ml-2">Quantity Restriction</span>
        </span>
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">8</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          🛠️ <span className="ml-2">Develop Your Own Strategies</span>
        </span>
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">2</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📈 <span className="ml-2">Number of Stock Scripts</span>
        </span>
        <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">20</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📉 <span className="ml-2">Number of MCX Strategies</span>
        </span>
        <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded dark:bg-red-900 dark:text-red-300">1</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          🔄 <span className="ml-2">Multi Strategies Mix</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📞 <span className="ml-2">Executive Support</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          💬 <span className="ml-2">WhatsApp Support</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          👨‍💻 <span className="ml-2">Expert Support</span>
        </span>
      </li>
    </ul>
  </div>

  {/* Buy Button */}
  <button
    data-modal-target="static-modal"
    data-modal-toggle="static-modal"
    className="block rounded-lg bg-blue-600 px-5 py-2.5 text-center absolute bottom-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
    type="button"
  >
    Buy now
  </button>
</div>


            {/* <!-- Pricing Item --> */}
            
            <div className="animate_top group relative rounded-lg flex flex-col items-center border border-gray-300 bg-gradient-to-b from-blue-50 to-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:border-gray-700 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 md:w-[45%] lg:w-1/3 xl:p-6">
  {/* Title */}
  <h1 className="w-full flex justify-evenly text-2xl mb-4 text-blue-700 dark:text-blue-400">
    <p>Alpha</p>
  </h1>

  {/* Price Section */}
  <div className="mb-8 p-6 w-full text-center bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-md dark:from-gray-700 dark:to-gray-800 dark:shadow-none">
    <h3 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400">
      ₹29999
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      /Half Year{" "}
      <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
        +18% GST
      </span>
    </p>
  </div>

  {/* Features List */}
  <div className="mt-9 w-full border-t border-gray-300 pb-12.5 pt-9 dark:border-gray-700">
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          ⚡️ <span className="ml-2">Auto Trading</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📊 <span className="ml-2">Quantity Restriction</span>
        </span>
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">8</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          🛠️ <span className="ml-2">Develop Your Own Strategies</span>
        </span>
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">2</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📈 <span className="ml-2">Number of Stock Scripts</span>
        </span>
        <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">30</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📉 <span className="ml-2">Number of MCX Strategies</span>
        </span>
        <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded dark:bg-red-900 dark:text-red-300">2</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          🔄 <span className="ml-2">Multi Strategies Mix</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          🎥 <span className="ml-2">Premium Webinars</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📞 <span className="ml-2">Executive Support</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          💬 <span className="ml-2">WhatsApp Support</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          👨‍💻 <span className="ml-2">Expert Support</span>
        </span>
      </li>
    </ul>
  </div>

  {/* Buy Button */}
  <button
    data-modal-target="static-modal"
    data-modal-toggle="static-modal"
    className="block rounded-lg bg-blue-600 px-5 py-2.5 text-center absolute bottom-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
    type="button"
  >
    Buy now
  </button>
</div>

            {/* <!-- Pricing Item --> */}
            

            <div className="animate_top group relative rounded-lg flex flex-col items-center border border-gray-300 bg-gradient-to-b from-blue-50 to-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:border-gray-700 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 md:w-[45%] lg:w-1/3 xl:p-6">
  {/* Title */}
  <h1 className="w-full flex justify-evenly text-2xl mb-4 text-blue-700 dark:text-blue-400">
    <p>Hermas Pro</p>
  </h1>

  {/* Price Section */}
  <div className="mb-8 p-6 w-full text-center bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-md dark:from-gray-700 dark:to-gray-800 dark:shadow-none">
    <h3 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400">
      ₹49999
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      /Yearly{" "}
      <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
        +18% GST
      </span>
    </p>
  </div>

  {/* Features List */}
  <div className="mt-9 w-full border-t border-gray-300 pb-12.5 pt-9 dark:border-gray-700">
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          ⚡️ <span className="ml-2">Auto Trading</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📊 <span className="ml-2">Quantity Restriction</span>
        </span>
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Unlimited</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          🛠️ <span className="ml-2">Develop Your Own Strategies</span>
        </span>
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Unlimited</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📈 <span className="ml-2">Number of Stock Scripts</span>
        </span>
        <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">50</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📉 <span className="ml-2">Number of MCX Strategies</span>
        </span>
        <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded dark:bg-red-900 dark:text-red-300">3</span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          🔄 <span className="ml-2">Multi Strategies Mix</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          🎥 <span className="ml-2">Premium Webinars</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          📞 <span className="ml-2">Executive Support</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          💬 <span className="ml-2">WhatsApp Support</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          👨‍💻 <span className="ml-2">Expert Support</span>
        </span>
      </li>
      <li className="flex justify-between items-center py-4 text-gray-800 dark:text-gray-300">
        <span className="flex items-center">
          🧑‍💻 <span className="ml-2">Developer Support</span>
        </span>
      </li>
    </ul>
  </div>

  {/* Buy Button */}
  <button
    data-modal-target="static-modal"
    data-modal-toggle="static-modal"
    className="block rounded-lg bg-blue-600 px-5 py-2.5 text-center absolute bottom-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
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
