"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();

  const [data, setData] = useState({
    username: "",
    password:""
   
  });

  const [error, setError] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const response = await fetch("https://hermas.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials. Please try again.");
      }

      
      const result = await response.json();
      console.log("Login successful:", result);

      
      router.push("/admin");
    } catch (err) {
      console.error("Login failed:", err.message);
      setError(err.message); 
      setData({ username: "", password: "" }); 
    }
  };

  return (
    <>
      
      <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
          >
            <h2 className="text-3xl font-semibold text-center text-black mb-15 dark:text-white xl:text-sectiontitle2">
              Login to Your Account
            </h2>

           
            {error && (
              <div className="mb-4 text-center text-red-500">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={data.username}
                  onChange={(e) => setData({ ...data, username: e.target.value })}
                  className="w-full border-b border-stroke !bg-white pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:!bg-black dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  className="w-full border-b border-stroke !bg-white pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:!bg-black dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              <button
                aria-label="login with email and password"
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Log in
              </button>
            </form>

            <div className="mt-12.5 border-t border-stroke py-5 text-center dark:border-strokedark">
              <p>
                Don't have an account?{" "}
                <Link
                  className="text-black hover:text-primary dark:text-white hover:dark:text-primary"
                  href="/auth/signup"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
     
    </>
  );
};

export default Signin;
