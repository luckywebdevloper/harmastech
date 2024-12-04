import image1 from "@/public/images/user/image1.png";
import image2 from "@/public/images/user/image2.png";
import image3 from "@/public/images/user/image3.png";
import image4 from "@/public/images/user/image4.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: " Rajesh Kumar",
    designation: "rajesh.kumar@techwave.com",
    image: image1,
    content:"I was initially skeptical about algo trading, but after a few months of using it, I can confidently say it has enhanced my trading strategies. The ability to backtest and optimize algorithms has given me a clearer perspective on potential risks and rewards. I highly recommend it for anyone looking to stay ahead in trading."
      
  },
  {
    id: 2,
    name: "Priya Sharma",
    designation: "priya.sharma@moneynest.com",
    image: image2,
    content:
      "The level of professionalism and expertise from hermastech is unparalleled.",
  },
  {
    id: 3,
    name: "Rohan Patel",
    designation: "rohan.patel@patelwealth.com",
    image: image3,
    content:
      "Since implementing algorithmic trading, I’ve been able to scale my investments with greater accuracy and speed. The algorithms have removed the emotional aspect of trading, and I’ve noticed a noticeable reduction in risks while maximizing profits. I'm excited to continue using this tool for more consistent results.",
  },
  {
    id: 4,
    name: "Neha Gupta",
    designation: " neha.gupta@nexgeninvestments.com",
    image: image4,
    content:
      "The team at hermastech delivered exceptional results, exceeding our expectations.",
  },
];
