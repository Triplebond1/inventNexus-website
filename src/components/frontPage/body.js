
import Image from "next/image";
import Link from "next/link";

export default function Body() {
  return (
      <div className="column dark:bg-black bg-white sm:w-3/4 lg:w-4/6">
        {/* propelling column /> */}
        <div className="py-6 h-20 inline-block align-middle  text-center text-blaze-orange-600 bg-transparent font-bold text-lg tracking-wider w-full">
          {"propelling invention and innovation"}
        </div>

        {/* <image column /> */}
        <div className="column  text-black text-xs w-full">
          <Image
            src="/leonardo-da-vinci-quote-2.png"
            layout="responsive"
            width={1600}
            height={200} 
            alt="InventNexus logo icon"
            className="object-cover" 
          />
          <p className="py-5 h-20  text-center dark:text-white text-black bg-transparent font-bold text-sm tracking-wider">
            {"Leonado Da vinci"}
          </p>
        </div>

        {/* <brief about inventnexus/> */}
        <div className="pb-20" id ="about-us">
          {/* <brief about inventnexus headings/> */}
          <div className=" h-10  text-center text-blaze-orange-600 bg-transparent font-bold text-xl tracking-wider" >
            {"INVENTNEXUS INC"}
          </div>
          {/* <brief about inventnexus text/> */}
          <div className="text-justify text-wrap whitespace-normal px-10 dark:text-white text-black bg-transparent font-normal text-sm tracking-normal">
            {`Welcome to Inventnexus, where innovation knows no bounds.
                We are dedicated to fostering creativity and driving global progress through inventive solutions.
                At Inventnexus, we empower local and global innovators and inventors to tackle challenges head-on,
                 breaking barriers to learning and collaboration. Our mission is to ignite curiosity,
                 inspire creativity, and empower individuals 
                 to make a meaningful impact on our world. 
                 Join us on our journey to shape the future through innovation at Inventnexus.`}
          </div>
        </div>

      {/* <brief about inventpedia/> */}
        <div className=" pb-10"  id="invent-pedia">
          <div className=" h-10  text-center text-blaze-orange-600 bg-transparent font-bold text-xl tracking-wider mb-5">
            {"INVENTPEDIA"}
          </div>

          {/* <inventpedia image column /> */}
          <div className="column  text-black text-xs w-full">
            <Image
              src="/A-live-breathing-archive-of-human-inventiveness-Inventpedia-is-more-than-just-an-encyclopedia.png"
              layout="responsive"
              width={1600}
              height={200} 
              alt="InventNexus logo icon"
              className="object-cover" 
            />
          </div>

          {/* <inventpedia the encyclopedia of innovation text column /> */}
          <div>
            <p className="pt-10 h-10  text-center text-blaze-orange-600 bg-transparent font-bold text-sm tracking-wider">
              {"The Encyclopedia of Invention and Innovation"}
            </p>
          </div>

          {/* <inventpedia text column /> */}
          <div className="text-justify text-wrap whitespace-normal py-10 px-10 dark:text-white text-black bg-transparent font-normal text-sm tracking-normal">
            {
              <div>
                A live, breathing archive of human inventiveness, Inventpedia is
                more than just an encyclopedia. Picture an environment where the
                next generation of innovators is motivated to push the envelope
                of what is possible, where you may not only learn from the
                experiences of those who have changed our world, but also have
                your own innovative ideas acknowledged and magnified. By
                advancing you into the future, Inventpedia aims to do more than
                merely pay tribute to history. In this environment, you can
                express your creativity freely, connect with ground-breaking
                chances through quick clicks, and let your ideas take off.
                <p>
                  {" "}
                  Are you prepared to go farther?{" "}
                  <Link href="/coffee" className="hover:text-blaze-orange-500">
                    Discover how Inventpedia may enhance your trip at
                    InventNexus,
                  </Link>
                  and become a part of a community that is revolutionizing the
                  realm of possibilities.
                </p>
              </div>
            }
          </div>
        </div>

        {/* <inventnexus mission statement/> */}
        <div className="pb-20" id = "mission-statement">
          <div className=" h-10  text-center text-blaze-orange-600 bg-transparent font-bold text-xl tracking-wider mb-5" >
            {"INVENTNEXUS MISSION STATEMENT"}
          </div>

          {/* <inventnexus mission statement image column /> */}
          <div className="column  text-black text-xs w-full">
            <Image
              src="/inventnexus-front-page.png"
              layout="responsive"
              width={1600}
              height={200} 
              alt="InventNexus logo icon"
              className="object-cover" 
            />
          </div>

          {/* <inventpedia the encyclopedia of innovation text column /> */}
          <div>
            <p className="pt-10 h-10  text-center text-blaze-orange-600 bg-transparent font-bold text-sm tracking-wider">
              {"The mission of inventNexus is based on these six pillars"}
            </p>
          </div>
        </div>

        <div className="">
          {/* <inventnexus mission statement 1 text column /> */}
          <div className="text-justify text-wrap whitespace-normal py-10 px-10 text-white bg-blaze-orange-400 font-normal text-sm tracking-normal pb-20">
            <p className="text-center py-2 font-bold  mb-2 text-xl text-blaze-orange-950">
              IGNITE CREATIVE GENIUS
            </p>
            Our goal is to develop and spark the creative potential in people
            and organizations by providing them with the skills, resources, and
            mindset necessary to lead the way in innovation and create
            ground-breaking products and solutions that transform markets and
            advance society.
          </div>

          {/* <inventnexus mission statement gap between /> */}
          <div className="bg-transparent h-20"></div>

          {/* <inventnexus mission statement 2 text column /> */}
          <div className="text-justify text-wrap whitespace-normal py-10 px-10 text-white bg-blaze-orange-400 font-normal text-sm tracking-normal">
            <p className="text-center py-2 font-bold mb-2 text-xl text-blaze-orange-950">
              AMPLIFY INNOVATION
            </p>
            Through helping innovators spread the word about their
            ground-breaking ideas, we are committed to amplifying innovation. We
            will work together to make sure that these brilliant ideas, which
            have the power to transform lives, are acknowledged and utilized by
            everyone.
          </div>

          {/* <inventnexus mission statement gap between /> */}
          <div className="bg-transparent h-20"></div>

          {/* <inventnexus mission statement 3 text column /> */}
          <div className="text-justify text-wrap whitespace-normal py-10 px-10 text-white bg-blaze-orange-400 font-normal text-sm tracking-normal">
            <p className="text-center py-2  font-bold mb-2 text-xl text-blaze-orange-950">
              CULTIVATE INVENTION CULTURE
            </p>
            Our goal is to foster innovation as a global culture. We firmly
            believe in the creative potential of people, and our goal is to
            uplift and assist innovators from all walks of life.
          </div>

          {/* <inventnexus mission statement gap between /> */}
          <div className="bg-transparent h-20"></div>

          {/* <inventnexus mission statement 4 text column /> */}
          <div className="text-justify text-wrap whitespace-normal py-10 px-10 text-white bg-blaze-orange-400 font-normal text-sm tracking-normal">
            <p className="text-center py-2  font-bold mb-2 text-xl text-blaze-orange-950">
              EMPOWER ENTREPRENEURIAL JOURNEY
            </p>
            Through the provision of necessary knowledge, we enable prospective
            entrepreneurs to effectively launch their business ventures.
            Creating hope and stimulating the economy are our main objectives.
          </div>

          {/* <inventnexus mission statement gap between /> */}
          <div className="bg-transparent h-20"></div>

          {/* <inventnexus mission statement 5 text column /> */}
          <div className="text-justify text-wrap whitespace-normal py-10 px-10 text-white bg-blaze-orange-400 font-normal text-sm tracking-normal">
            <p className="text-center py-2  font-bold mb-2 text-xl text-blaze-orange-950">
              RESURRECT INNOVATION HERITAGE
            </p>
            We are on a mission to resurrect the rich history of innovation and
            invention. By revisiting the achievement of the past, we inspire
            present and future minds to reach new heights of creativity.
          </div>

          {/* <inventnexus mission statement gap between /> */}
          <div className="bg-transparent h-20"></div>

          {/* <inventnexus mission statement 6 text column /> */}
          <div className="text-justify text-wrap whitespace-normal py-10 px-10 text-white bg-blaze-orange-400 font-normal text-sm tracking-normal">
            <p className="text-center py-2 font-bold mb-2 text-xl text-blaze-orange-950">
              CONNECT GLOBAL INNOVATION
            </p>
            We provide state-of-the-art discoveries and inventions right to your
            home from all across the world. Our goal is to make innovators lives
            easier by giving them access to game-changing solutions that boost
            productivity and generate new concepts for businesses.
          </div>

          {/* <inventnexus mission statement gap between /> */}
          <div className="bg-transparent h-20"></div>
        </div>
        {/* <inventnexus mission statement gap between /> */}
        <div className="bg-transparent h-20 hover:animate-[bounce_1s_ease-in-out_5] duration-200 " >
          <p className="text-center text-wrap whitespace-normal py-2 px-5 text-blaze-orange-600 font-bold text-sm tracking-normal">
            Explore, Connect, and Be Inspired To Create The Future You Have
            Always Dreamed With InventNexus.
          </p>
        </div>
      </div>
  );
}
