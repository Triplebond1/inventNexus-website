import Image from "next/image";
import Link from "next/link";
import { Carousel } from "../carousel";

const Quote = [
  {
    quote: `"The real problem is not whether machines think, but whether men do"`,
    author: "Richard Feynman",
  },

  {
    quote: `"Do what you can, with what you have, where you are."`,
    author: "Theodore Roosevelt",
  },

  {
    quote: `"It is no longer about how much you know; it is about what you can do with what you know or the information and tools available. It is more about what you can do to help yourself and humanity grow."`,
    author: "Olayinka Adebisi, founder of InventNexus",
  },

  {
    quote: `"knowledge is only potential power, it becomes power only when, and if, it is organised into definite plans of action and directed to a definite end"`,
    author: "Napolean Hill",
  },

  // {
  //   quote:
  //     `""`,
  //   author: "",
  // },

  {
    quote:
      "The future belongs to those who takes action with knowledge, not just those who collect it",
    author: "~~~~~",
  },
];

export default function Body() {
  return (
    <div className="column w-screen dark:bg-white max-w-screen bg-white sm:w-3/4 lg:w-4/6 mx-auto">
      {/* Leonardo Da Vinci Image & Caption */}
      <section className="w-full">
        <ImageSection
          src="/pngImages/knowing-is-not-enough-2.png"
          alt="Leonardo Da Vinci"
        />
      </section>

      {/* About InventNexus */}
      <section className="pb-20" id="about-us">
        <h2 className="h-10 pb-10 text-center text-blaze-orange-600 font-bold text-3xl tracking-wider">
          INVENTNEXUS INC
          {/* Propelling Message */}
          <span className="flex items-center justify-center text-blaze-orange-900 font-normal text-sm tracking-wider">
            propelling invention and innovation
          </span>
        </h2>
          <InventNexusIntro />
        
      </section>

      {/* quote section */}
      <section className="flex mx-auto mb-5 pb-10 justify-center items-center ">
        <Carousel listText={Quote} />
      </section>
      
      <div className="h-20"></div>
      {/* Inventpedia Section */}
      <section >
        <ImageTextSection
          id="invent-pedia"
          title="INVENTPEDIA"
          src="/pngImages/A-live-breathing-archive-of-human-inventiveness-Inventpedia-is-more-than-just-an-encyclopedia.png"
          alt="InventNexus Inventpedia"
          subtitle="The Encyclopedia of Invention and Innovation"
        >
          <p className="text-lg  text-gray-700 mb-6 font-normal">
            A live, breathing archive of human inventiveness, Inventpedia is
            more than just an encyclopedia. Picture an environment where the
            next generation of innovators is motivated to push the envelope of
            what is possible, where you may not only learn from the experiences
            of those who have changed our world, but also have your own
            innovative ideas acknowledged and magnified. By advancing you into
            the future, Inventpedia aims to do more than merely pay tribute to
            history. In this environment, you can express your creativity
            freely, connect with groundbreaking opportunities, and let your
            ideas take off.
          </p>
          <p className="mt-4 text-gray-700 text-lg mb-6">
            Are you prepared to go farther?{" "}
            <Link href="/coffee" className="hover:text-blaze-orange-500">
              Discover how Inventpedia may enhance your trip at InventNexus,
            </Link>{" "}
            and become a part of a community that is revolutionizing the realm
            of possibilities.
          </p>
        </ImageTextSection>
      </section>

      {/* InventNexus Mission Statement Section */}
      <section>
        <ImageTextSection
          id="mission-statement"
          title="MISSION STATEMENT"
          src="/pngImages/inventnexus-front-page.png"
          alt="InventNexus Mission"
          subtitle="The mission of InventNexus is based on these six pillars"
        />
      </section>
      {/* Mission Statements */}
      <section className=" space-y-20 pb-20">
        {[
          {
            title: "IGNITE CREATIVE GENIUS",
            text: `Our goal is to develop and spark the creative potential in people and
              organizations by providing them with the skills, resources, and mindset
              necessary to lead the way in innovation and create ground-breaking products
              and solutions that transform markets and advance society.`,
          },
          {
            title: "AMPLIFY INNOVATION",
            text: `Through helping innovators spread the word about their ground-breaking ideas,
              we are committed to amplifying innovation. We will work together to make sure that
              these brilliant ideas, which have the power to transform lives, are acknowledged
              and utilized by everyone.`,
          },
          {
            title: "CULTIVATE INVENTION CULTURE",
            text: `Our goal is to foster innovation as a global culture. We firmly believe in the
              creative potential of people, and our goal is to uplift and assist innovators
              from all walks of life.`,
          },
          {
            title: "EMPOWER ENTREPRENEURIAL JOURNEY",
            text: `Through the provision of necessary knowledge, we enable prospective entrepreneurs
              to effectively launch their business ventures. Creating hope and stimulating the
              economy are our main objectives.`,
          },
          {
            title: "RESURRECT INNOVATION HERITAGE",
            text: `We are on a mission to resurrect the rich history of innovation and invention.
              By revisiting the achievement of the past, we inspire present and future minds to
              reach new heights of creativity.`,
          },
          {
            title: "CONNECT GLOBAL INNOVATION",
            text: `We provide state-of-the-art discoveries and inventions right to your home from
              all across the world. Our goal is to make innovators' lives easier by giving them
              access to game-changing solutions that boost productivity and generate new concepts
              for businesses.`,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="px-5 mx-10 py-10 text-justify text-wrap text-blaze-orange-950 bg-blaze-orange-50 rounded-3xl border-2 border-blaze-orange-600 font-normal text-sm tracking-normal"
          >
            <p className="text-center py-2 font-bold mb-2 text-xl text-blaze-orange-600">
              {item.title}
            </p>
            <p className="text-lg font-medium">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Closing Message */}
      <section className="h-20 hover:animate-[bounce_1s_ease-in-out_5] duration-200 flex items-center justify-center pb-20 bg-transparent">
        <p className="py-2 px-5 text-blaze-orange-600 font-bold text-lg tracking-normal text-center">
          Explore, Connect, and Be Inspired To Create The Future You Have Always
          Dreamed With InventNexus.
        </p>
      </section>
    </div>
  );
}
const Section = ({ title, children, className = "", id }) => (
  <section id={id} className={`pb-10 ${className}`}>
    {title && (
      <h2 className="text-3xl font-bold text-center text-blaze-orange-600 mb-6">
        {title}
      </h2>
    )}
    <div className="px-10 py-5 text-justify text-black font-normal text-lg tracking-normal">
      {children}
    </div>
  </section>
);

const ImageSection = ({ src, alt, caption }) => (
  <section className="w-full text-xs text-black text-center">
    <Image
      src={src}
      layout="responsive"
      width={1600}
      height={200}
      alt={alt}
      className="object-cover"
    />
    <p className="py-5 text-sm font-bold tracking-wider">{caption}</p>
  </section>
);

const ImageTextSection = ({ id, title, src, alt, subtitle, children }) => (
  <Section id={id} title={title}>
    <Image
      src={src}
      layout="responsive"
      width={1600}
      height={200}
      alt={alt}
      className="object-cover"
    />
    {subtitle && (
      <p className="pt-10 text-lg text-center font-bold text-blaze-orange-600 tracking-wider">
        {subtitle}
      </p>
    )}
    <div className="max-w-5/6 text-justify mx-auto py-10  text-black font-normal text-lg tracking-normal">
      {children}
    </div>
  </Section>
);

const InventNexusIntro = () => {
  return (
    <div className="max-w-5/6 text-justify mx-auto px-10 py-10  text-black font-normal text-lg tracking-normal">
      <p className="text-lg text-gray-700 mb-6">
        Welcome to{" "}
        <span className="font-semibold text-blaze-orange-500">InventNexus</span>
        , the epicenter of groundbreaking ideas, limitless creativity, and
        real-world impact. Here, we don’t just talk about innovation—we{" "}
        <span className="font-semibold">
          ignite it, refine it, and bring it to life
        </span>
        .
      </p>

      <h2 className="text-xl font-bold text-gray-800 mb-4">
        The Future Belongs to the Doers. Are You One of Them?
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Knowledge alone isn’t enough. The world doesn’t reward what you know—it
        rewards <span className="font-semibold">what you do with it</span>.
        That’s why{" "}
        <span className="font-semibold text-blaze-orange-500">InventNexus</span>{" "}
        is more than a platform; it’s a movement—a space where thinkers,
        creators, and visionaries unite to solve challenges, push boundaries,
        and <span className="font-semibold">turn bold ideas into reality</span>.
      </p>

      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Break Barriers. Build the Future.
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        We’re tearing down the walls between{" "}
        <span className="font-semibold">
          knowledge and action, theory and execution, dreamers and doers
        </span>
        . At{" "}
        <span className="font-semibold text-blaze-orange-500">InventNexus</span>
        , you’ll find a{" "}
        <span className="font-semibold">global community of innovators</span>,
        collaborating, refining, and launching the next wave of game-changing
        inventions. Whether you are an inventor, entrepreneur, researcher, or
        just someone with a brilliant idea,{" "}
        <span className="font-semibold">this is where you belong</span>.
      </p>

      <h2 className="text-xl font-bold text-gray-800 mb-4">
        A Hub for Visionaries, Innovators & Change-Makers
      </h2>

      <ul className="text-lg text-gray-700 list-disc list-inside mb-6">
        <li>
          <span className="font-semibold">Document your ideas</span> and
          contribute to a growing ecosystem of innovation.
        </li>
        <li>
          <span className="font-semibold">
            Collaborate with like-minded pioneers
          </span>{" "}
          to refine and evolve concepts.
        </li>
        <li>
          <span className="font-semibold">
            Access resources, insights, and inspiration
          </span>{" "}
          to bring your vision to life.
        </li>
        <li>
          <span className="font-semibold">
            Be part of a movement that’s shaping the future
          </span>
          —not just watching it happen.
        </li>
      </ul>

      <h2 className="text-xl font-bold text-gray-800 mb-4">
        The World Needs What’s in Your Mind. Let’s Build It Together.
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        We don’t just celebrate past and present breakthroughs—we{" "}
        <span className="font-semibold">create the future</span>.{" "}
        <span className="font-semibold text-blaze-orange-500">InventNexus</span>{" "}
        is the launchpad where your ideas gain momentum and become reality.
      </p>

      <p className="text-lg font-bold text-blaze-orange-600 mb-6">
        🚀 Join InventNexus today and be part of the innovation revolution. The
        future is being built right here. Will you be a spectator or a creator?
      </p>
    </div>
  );
};





// import Image from "next/image";
// import Link from "next/link";
// import { Carousel } from "../carousel";
// import { motion } from "framer-motion";

// const Quote = [
//   {
//     quote: `"The real problem is not whether machines think, but whether men do"`,
//     author: "Richard Feynman",
//   },
//   {
//     quote: `"Do what you can, with what you have, where you are."`,
//     author: "Theodore Roosevelt",
//   },
//   {
//     quote: `"It is no longer about how much you know; it is about what you can do with what you know or the information and tools available. It is more about what you can do to help yourself and humanity grow."`,
//     author: "Olayinka Adebisi, founder of InventNexus",
//   },
//   {
//     quote: `"knowledge is only potential power, it becomes power only when, and if, it is organised into definite plans of action and directed to a definite end"`,
//     author: "Napoleon Hill",
//   },
//   {
//     quote: "The future belongs to those who take action with knowledge, not just those who collect it",
//     author: "Anonymous",
//   },
// ];

// export default function Body() {
//   return (
//     <div className="w-full bg-gray-50 dark:bg-gray-900 min-h-screen">
//       {/* Hero Image Section */}
//       <section className="relative w-full">
//         <ImageSection
//           src="/pngImages/knowing-is-not-enough-2.png"
//           alt="Leonardo Da Vinci"
//           caption="Inspiration drives innovation"
//         />
//       </section>

//       {/* About InventNexus */}
//       <section className="py-16" id="about-us">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blaze-orange-600 mb-4">
//           INVENTNEXUS INC
//           <span className="block text-lg font-medium text-blaze-orange-900 mt-2">
//             Propelling Invention and Innovation
//           </span>
//         </h2>
//         <InventNexusIntro />
//       </section>

//       {/* Quote Carousel */}
//       <section className="py-12 bg-gradient-to-r from-blaze-orange-50 to-blaze-orange-100">
//         <div className="max-w-4xl mx-auto">
//           <Carousel listText={Quote} />
//         </div>
//       </section>

//       {/* Inventpedia Section */}
//       <section className="py-16" id="invent-pedia">
//         <ImageTextSection
//           title="INVENTPEDIA"
//           src="/pngImages/A-live-breathing-archive-of-human-inventiveness-Inventpedia-is-more-than-just-an-encyclopedia.png"
//           alt="InventNexus Inventpedia"
//           subtitle="The Encyclopedia of Invention and Innovation"
//         >
//           <p className="text-lg text-gray-600 mb-6">
//             A live, breathing archive of human inventiveness, Inventpedia is more than just an encyclopedia. Picture an environment where the next generation of innovators is motivated to push the envelope of what is possible, where you may not only learn from the experiences of those who have changed our world, but also have your own innovative ideas acknowledged and magnified. By advancing you into the future, Inventpedia aims to do more than merely pay tribute to history.
//           </p>
//           <p className="text-lg text-gray-600">
//             Ready to explore?{" "}
//             <Link href="/coffee" className="text-blaze-orange-600 hover:text-blaze-orange-800 font-semibold">
//               Discover how Inventpedia can elevate your journey
//             </Link>{" "}
//             and join a community revolutionizing the realm of possibilities.
//           </p>
//         </ImageTextSection>
//       </section>

//       {/* Mission Statement Section */}
//       <section className="py-16" id="mission-statement">
//         <ImageTextSection
//           title="OUR MISSION"
//           src="/pngImages/inventnexus-front-page.png"
//           alt="InventNexus Mission"
//           subtitle="Built on Six Core Pillars"
//         />
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 title: "IGNITE CREATIVE GENIUS",
//                 text: `We spark creative potential by equipping individuals and organizations with the tools, resources, and mindset to lead innovation and create transformative solutions.`,
//               },
//               {
//                 title: "AMPLIFY INNOVATION",
//                 text: `We amplify groundbreaking ideas by helping innovators share their vision, ensuring transformative concepts reach and impact global audiences.`,
//               },
//               {
//                 title: "CULTIVATE INVENTION CULTURE",
//                 text: `We foster a global culture of innovation, uplifting and supporting creators from all walks of life to unleash their creative potential.`,
//               },
//               {
//                 title: "EMPOWER ENTREPRENEURIAL JOURNEY",
//                 text: `We provide essential knowledge to empower entrepreneurs to launch ventures, stimulate economies, and create lasting impact.`,
//               },
//               {
//                 title: "RESURRECT INNOVATION HERITAGE",
//                 text: `We revive the rich history of invention to inspire present and future minds to reach new heights of creativity.`,
//               },
//               {
//                 title: "CONNECT GLOBAL INNOVATION",
//                 text: `We bring cutting-edge discoveries to innovators worldwide, boosting productivity and sparking new business concepts.`,
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-gray-800 dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
//               >
//                 <h3 className="text-xl font-bold text-center text-blaze-orange-600 mb-3">{item.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Closing Message */}
//       <section className="py-16 bg-gradient-to-r from-blaze-orange-600 to-blaze-orange-800 px-5 text-white text-center">
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-xl md:text-2xl font-bold max-w-3xl mx-auto"
//         >
//           Explore, Connect, and Create the Future with InventNexus. Join the Innovation Revolution Today!
//         </motion.p>
//       </section>
//     </div>
//   );
// }

// const Section = ({ title, children, className = "", id }) => (
//   <section id={id} className={`py-12 ${className}`}>
//     {title && (
//       <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blaze-orange-600 mb-8">
//         {title}
//       </h2>
//     )}
//     <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
//   </section>
// );

// const ImageSection = ({ src, alt, caption }) => (
//   <section className="relative w-full">
//     <Image
//       src={src}
//       layout="responsive"
//       width={1600}
//       height={400}
//       alt={alt}
//       className="object-cover"
//     />
//     {caption && (
//       <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-2">
//         <p className="text-center text-white text-sm font-medium">{caption}</p>
//       </div>
//     )}
//   </section>
// );

// const ImageTextSection = ({ id, title, src, alt, subtitle, children }) => (
//   <Section id={id} title={title}>
//     <Image
//       src={src}
//       layout="responsive"
//       width={1600}
//       height={400}
//       alt={alt}
//       className="object-cover rounded-lg shadow-md"
//     />
//     {subtitle && (
//       <p className="mt-6 text-xl font-semibold text-center text-blaze-orange-600">
//         {subtitle}
//       </p>
//     )}
//     <div className="mt-8 text-gray-600">{children}</div>
//   </Section>
// );

// const InventNexusIntro = () => {
//   return (
//     <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <p className="text-lg text-gray-600 mb-6">
//           Welcome to{" "}
//           <span className="font-semibold text-blaze-orange-600">InventNexus</span>, the epicenter of groundbreaking ideas and limitless creativity. We don’t just talk about innovation—we{" "}
//           <span className="font-semibold">ignite it, refine it, and bring it to life</span>.
//         </p>
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">The Future Belongs to the Doers</h2>
//         <p className="text-lg text-gray-600 mb-6">
//           The world rewards <span className="font-semibold">action</span>. InventNexus is a movement where thinkers, creators, and visionaries unite to turn bold ideas into reality.
//         </p>
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Break Barriers, Build the Future</h2>
//         <p className="text-lg text-gray-600 mb-6">
//           We’re tearing down the walls between <span className="font-semibold">knowledge and action</span>. Join a global community of innovators to collaborate, refine, and launch game-changing inventions.
//         </p>
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">A Hub for Visionaries</h2>
//         <ul className="text-lg text-gray-600 list-disc list-inside mb-6">
//           <li><span className="font-semibold">Document</span> your ideas in a vibrant ecosystem.</li>
//           <li><span className="font-semibold">Collaborate</span> with pioneers to evolve concepts.</li>
//           <li><span className="font-semibold">Access</span> resources and inspiration.</li>
//           <li><span className="font-semibold">Shape</span> the future with us.</li>
//         </ul>
//         <p className="text-lg font-bold text-blaze-orange-600">
//           🚀 Join InventNexus and be a creator of the future.{" "}
//           <Link href="/join" className="underline hover:text-blaze-orange-800">Start now</Link>.
//         </p>
//       </motion.div>
//     </div>
//   );
// };