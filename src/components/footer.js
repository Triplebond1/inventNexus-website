import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex column-3 w-full items-center justify-center border-t flex-col bg-gray pt-2">
      {/* <follow on social media column /> */}
      <div className="column-1 bg-gray ">
        <p className="font-bold text-blaze-orange-600">
          follow on social media
        </p>
      </div>

      {/* Logo Section */}
      <div className="w-full flex justify-center mb-4 pt-10">
        <Image
          src="/invent-logo-1.jpg"
          layout="responsive"
          width={1600}
          height={200} 
          alt="InventNexus logo icon"
          className="object-cover" 
        />
      </div>


      {/* <powered by column /> */}
      <div className="column-1 ">
        <p className="text-blaze-orange-700">
          Powered by{" "}
          <span className="font-bold text-blaze-orange-700">
            Triplebond Technology
          </span>
        </p>
      </div>
    </footer>
  );
}
