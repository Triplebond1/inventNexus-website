import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  return token ? < Outlet /> : < Navigate to="/login" />;
};

export default PrivateRoute;


// from "next/image";
// import Link from "next/link";
// import { Carousel } from "../carousel";

// const Quote = [
//   {
//     quote: "The real problem is not whether machines think, but whether men do",
//     author: "Richard Feynman",
//   },

//   {
//     quote: "Do what you can, with what you have, where you are.",
//     author: "Theodore Roosevelt",
//   },

//   {
//     quote: "It is no longer about how much you know; it is about what you can do with what you know or the information and tools available. It is more about what you can do to help yourself and humanity grow.",
//     author: "Olayinka Adebisi, founder of InventNexus",
//   },

//   {
//     quote: "knowledge is only potential power, it becomes power only when, and if, it is organised into definite plans of action and directed to a definite end",
//     author: "Napolean Hill",
//   },

//   // {
//   //   quote:
//   //     "",
//   //   author: "",
//   // },

//   {
//     quote:
//       "The future belongs to those who takes action with knowledge, not just those who collect it",
//     author: "~~~~~",
//   },
// ];

// export default function Body() {
//   return (
//     <div className="dark:bg-gray-900 max-w-screen bg-white sm:w-3/4 lg:w-4/6 mx-auto ">
//       {/* Propelling Message */}
//       <section className="py-6 h-20 flex items-center justify-center text-blaze-orange-600 font-bold text-lg tracking-wider">
//         propelling invention and innovation
//       </section>

//       {/* Leonardo Da Vinci Image & Caption */}
//       <section className="w-full text-black text-xs">
//         <Image
//           src="/leonardo-da-vinci-quote-2.png"
//           layout="responsive"
//           width={50}
//           height={50}
//           alt="InventNexus logo icon"
//           className="object-cover"
//         />
//         <p className="py-5 h-20 text-center dark:text-white text-black font-bold text-sm tracking-wider">
//           Leonardo Da Vinci
//         </p>
//       </section>

//       {/* About InventNexus */}
//       <section className="pb-20" id="about-us">
//         <h2 className="h-10 text-center text-blaze-orange-600 font-bold text-3xl tracking-wider">
//           INVENTNEXUS INC
//         </h2>
//         <p className="px-10 py-5 text-justify dark:text-white text-black font-normal text-sm tracking-normal">
//           <InventNexusIntro />
//         </p>
//       </section>

//       <section className="w-full mb-5 pb-10 flex justify-center items-center">
//         <Carousel listText={Quote} />
//       </section>

//       {/* Inventpedia Section */}
//       <section className="pb-10" id="invent-pedia">
//         <h2 className="h-10 mb-10 text-center text-blaze-orange-600 font-bold text-3xl tracking-wider">
//           INVENTPEDIA
//         </h2>
//         <div className="w-full">
//           <Image
//             src="/A-live-breathing-archive-of-human-inventiveness-Inventpedia-is-more-than-just-an-encyclopedia.png"
//             layout="responsive"
//             width={1600}
//             height={200}
//             alt="InventNexus Inventpedia"
//             className="object-cover"
//           />
//         </div>
//         <p className="pt-10 h-10 text-center text-blaze-orange-600 font-bold text-lg tracking-wider">
//           The Encyclopedia of Invention and Innovation
//         </p>
//         <div className="px-10 py-10 text-justify dark:text-white text-black font-normal text-lg tracking-normal">
//           <p>
//             A live, breathing archive of human inventiveness, Inventpedia is
//             more than just an encyclopedia. Picture an environment where the
//             next generation of innovators is motivated to push the envelope of
//             what is possible, where you may not only learn from the experiences
//             of those who have changed our world, but also have your own
//             innovative ideas acknowledged and magnified. By advancing you into
//             the future, Inventpedia aims to do more than merely pay tribute to
//             history. In this environment, you can express your creativity
//             freely, connect with groundbreaking opportunities, and let your
//             ideas take off.
//           </p>
//           <p className="mt-4">
//             Are you prepared to go farther?{" "}
//             <Link href="/coffee" className="hover:text-blaze-orange-500">
//               Discover how Inventpedia may enhance your trip at InventNexus,
//             </Link>{" "}
//             and become a part of a community that is revolutionizing the realm
//             of possibilities.
//           </p>
//         </div>
//       </section>

//       {/* InventNexus Mission Statement Section */}
//       <section className="pb-20" id="mission-statement">
//         <h2 className="h-10 mb-16 text-center text-blaze-orange-600 font-bold text-3xl tracking-wider">
//           INVENTNEXUS MISSION STATEMENT
//         </h2>
//         <div className="w-full">
//           <Image
//             src="/inventnexus-front-page.png"
//             layout="responsive"
//             width={1600}
//             height={200}
//             alt="InventNexus Mission"
//             className="object-cover"
//           />
//         </div>
//         <p className="pt-10 h-10 text-center text-blaze-orange-600 font-bold text-xl tracking-normal">
//           The mission of InventNexus is based on these six pillars
//         </p>
//       </section>

//       {/* Mission Statements */}
//       <section className="space-y-20 pb-20">
//         {[
//           {
//             title: "IGNITE CREATIVE GENIUS",
//             text: Our goal is to develop and spark the creative potential in people and
//               organizations by providing them with the skills, resources, and mindset
//               necessary to lead the way in innovation and create ground-breaking products
//               and solutions that transform markets and advance society.,
//           },
//           {
//             title: "AMPLIFY INNOVATION",
//             text: Through helping innovators spread the word about their ground-breaking ideas,
//               we are committed to amplifying innovation. We will work together to make sure that
//               these brilliant ideas, which have the power to transform lives, are acknowledged
//               and utilized by everyone.,
//           },
//           {
//             title: "CULTIVATE INVENTION CULTURE",
//             text: Our goal is to foster innovation as a global culture. We firmly believe in the
//               creative potential of people, and our goal is to uplift and assist innovators
//               from all walks of life.,
//           },
//           {
//             title: "EMPOWER ENTREPRENEURIAL JOURNEY",
//             text: Through the provision of necessary knowledge, we enable prospective entrepreneurs
//               to effectively launch their business ventures. Creating hope and stimulating the
//               economy are our main objectives.,
//           },
//           {
//             title: "RESURRECT INNOVATION HERITAGE",
//             text: We are on a mission to resurrect the rich history of innovation and invention.
//               By revisiting the achievement of the past, we inspire present and future minds to
//               reach new heights of creativity.,
//           },
//           {
//             title: "CONNECT GLOBAL INNOVATION",
//             text: We provide state-of-the-art discoveries and inventions right to your home from
//               all across the world. Our goal is to make innovators' lives easier by giving them
//               access to game-changing solutions that boost productivity and generate new concepts
//               for businesses.,
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="px-10 py-10 text-justify text-white bg-blaze-orange-400 font-normal text-lg tracking-normal"
//           >
//             <p className="text-center py-2 font-bold mb-2 text-lg text-blaze-orange-950">
//               <h2>{item.title}</h2>
//             </p>
//             <p className="text-sm"> <h3>{item.text} </h3></p>
//           </div>
//         ))}
//       </section>

//       {/* Closing Message */}
//       <section className="h-20 hover:animate-[bounce_1s_ease-in-out_5] duration-200 flex items-center justify-center bg-transparent">
//         <p className="py-2 px-5 text-blaze-orange-600 font-bold text-sm tracking-normal text-center">
//           Explore, Connect, and Be Inspired To Create The Future You Have Always
//           Dreamed With InventNexus.
//         </p>
//       </section>
//     </div>
//   );
// }

// const InventNexusIntro = () => {
//   return (
//     <div className="max-w-xl mx-auto text-justify px-6 py-12">
      
//       <h1 className="text-xl font-bold text-center text-orange-600 mb-6">
//         InventNexus – Where Ideas Become World-Changing Innovations!
//       </h1>
//       <p className="text-lg text-gray-700 mb-6">
//         Welcome to{" "}
//         <span className="font-semibold text-orange-500">InventNexus</span>, the
//         epicenter of groundbreaking ideas, limitless creativity, and real-world
//         impact. Here, we don’t just talk about innovation—we{" "}
//         <span className="font-semibold">
//           ignite it, refine it, and bring it to life
//         </span>
//         .
//       </p>
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">
//         The Future Belongs to the Doers. Are You One of Them?
//       </h2>
//       <p className="text-lg text-gray-700 mb-6">
//         Knowledge alone isn’t enough. The world doesn’t reward what you know—it
//         rewards <span className="font-semibold">what you do with it</span>.
//         That’s why{" "}
//         <span className="font-semibold text-orange-500">InventNexus</span> is
//         more than a platform; it’s a movement—a space where thinkers, creators,
//         and visionaries unite to solve challenges, push boundaries, and{" "}
//         <span className="font-semibold">turn bold ideas into reality</span>.
//       </p>
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">
//         Break Barriers. Build the Future.
//       </h2>
//       <p className="text-lg text-gray-700 mb-6">
//         We’re tearing down the walls between{" "}
//         <span className="font-semibold">
//           knowledge and action, theory and execution, dreamers and doers
//         </span>
//         . At <span className="font-semibold text-orange-500">InventNexus</span>,
//         you’ll find a{" "}
//         <span className="font-semibold">global community of innovators</span>,
//         collaborating, refining, and launching the next wave of game-changing
//         inventions. Whether you are an inventor, entrepreneur, researcher, or
//         just someone with a brilliant idea,{" "}
//         <span className="font-semibold">this is where you belong</span>.
//       </p>
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">
//         A Hub for Visionaries, Innovators & Change-Makers
//       </h2>
//       <ul className="text-lg text-gray-700 list-disc list-inside mb-6">
//         <li>
//           <span className="font-semibold">Document your ideas</span> and
//           contribute to a growing ecosystem of innovation.
//         </li>
//         <li>
//           <span className="font-semibold">
//             Collaborate with like-minded pioneers
//           </span>{" "}
//           to refine and evolve concepts.
//         </li>
//         <li>
//           <span className="font-semibold">
//             Access resources, insights, and inspiration
//           </span>{" "}
//           to bring your vision to life.
//         </li>
//         <li>
//           <span className="font-semibold">
//             Be part of a movement that’s shaping the future
//           </span>
//           —not just watching it happen.
//         </li>
//       </ul>
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">
//         The World Needs What’s in Your Mind. Let’s Build It Together.
//       </h2>
//       <p className="text-lg text-gray-700 mb-6">
//         We don’t just celebrate past and present breakthroughs—we{" "}
//         <span className="font-semibold">create the future</span>.{" "}
//         <span className="font-semibold text-orange-500">InventNexus</span> is
//         the launchpad where your ideas gain momentum and become reality.
//       </p>
//       <p className="text-xl font-bold text-orange-600 mb-6">
//         🚀 Join InventNexus today and be part of the innovation revolution. The
//         future is being built right here. Will you be a spectator or a creator?
//       </p>
      
//     </div>
//   );
// };

