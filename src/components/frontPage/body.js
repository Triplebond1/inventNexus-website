import Image from "next/image";
import Link from "next/link";

export default function Body() {
  return (
    <div className="dark:bg-gray-900 bg-white sm:w-3/4 lg:w-4/6 mx-auto">
      {/* Propelling Message */}
      <section className="py-6 h-20 flex items-center justify-center text-blaze-orange-600 font-bold text-lg tracking-wider">
        propelling invention and innovation
      </section>

      {/* Leonardo Da Vinci Image & Caption */}
      <section className="w-full text-black text-xs">
        <Image
          src="/leonardo-da-vinci-quote-2.png"
          layout="responsive"
          width={1600}
          height={200}
          alt="InventNexus logo icon"
          className="object-cover"
        />
        <p className="py-5 h-20 text-center dark:text-white text-black font-bold text-sm tracking-wider">
          Leonardo Da Vinci
        </p>
      </section>

      {/* About InventNexus */}
      <section className="pb-20" id="about-us">
        <h2 className="h-10 text-center text-blaze-orange-600 font-bold text-xl tracking-wider">
          INVENTNEXUS INC
        </h2>
        <p className="px-10 py-5 text-justify dark:text-white text-black font-normal text-sm tracking-normal">
          Welcome to Inventnexus, where innovation knows no bounds. We are
          dedicated to fostering creativity and driving global progress through
          inventive solutions. At Inventnexus, we empower local and global
          innovators and inventors to tackle challenges head-on, breaking
          barriers to learning and collaboration. Our mission is to ignite
          curiosity, inspire creativity, and empower individuals to make a
          meaningful impact on our world. Join us on our journey to shape the
          future through innovation at Inventnexus.
        </p>
      </section>

      {/* Inventpedia Section */}
      <section className="pb-10" id="invent-pedia">
        <h2 className="h-10 mb-5 text-center text-blaze-orange-600 font-bold text-xl tracking-wider">
          INVENTPEDIA
        </h2>
        <div className="w-full">
          <Image
            src="/A-live-breathing-archive-of-human-inventiveness-Inventpedia-is-more-than-just-an-encyclopedia.png"
            layout="responsive"
            width={1600}
            height={200}
            alt="InventNexus Inventpedia"
            className="object-cover"
          />
        </div>
        <p className="pt-10 h-10 text-center text-blaze-orange-600 font-bold text-sm tracking-wider">
          The Encyclopedia of Invention and Innovation
        </p>
        <div className="px-10 py-10 text-justify dark:text-white text-black font-normal text-sm tracking-normal">
          <p>
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
          <p className="mt-4">
            Are you prepared to go farther?{" "}
            <Link href="/coffee" className="hover:text-blaze-orange-500">
              Discover how Inventpedia may enhance your trip at InventNexus,
            </Link>{" "}
            and become a part of a community that is revolutionizing the realm
            of possibilities.
          </p>
        </div>
      </section>

      {/* InventNexus Mission Statement Section */}
      <section className="pb-20" id="mission-statement">
        <h2 className="h-10 mb-5 text-center text-blaze-orange-600 font-bold text-xl tracking-wider">
          INVENTNEXUS MISSION STATEMENT
        </h2>
        <div className="w-full">
          <Image
            src="/inventnexus-front-page.png"
            layout="responsive"
            width={1600}
            height={200}
            alt="InventNexus Mission"
            className="object-cover"
          />
        </div>
        <p className="pt-10 h-10 text-center text-blaze-orange-600 font-bold text-sm tracking-wider">
          The mission of InventNexus is based on these six pillars
        </p>
      </section>

      {/* Mission Statements */}
      <section className="space-y-20 pb-20">
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
            className="px-10 py-10 text-justify text-white bg-blaze-orange-400 font-normal text-sm tracking-normal"
          >
            <p className="text-center py-2 font-bold mb-2 text-xl text-blaze-orange-950">
              {item.title}
            </p>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      {/* Closing Message */}
      <section className="h-20 hover:animate-[bounce_1s_ease-in-out_5] duration-200 flex items-center justify-center bg-transparent">
        <p className="py-2 px-5 text-blaze-orange-600 font-bold text-sm tracking-normal text-center">
          Explore, Connect, and Be Inspired To Create The Future You Have Always
          Dreamed With InventNexus.
        </p>
      </section>
    </div>
  );
}
