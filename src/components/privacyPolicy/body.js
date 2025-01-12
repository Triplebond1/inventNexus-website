
export default function Body() {
  return (
    <div className="column">
      {/* propelling column /> */}
      <div className="py-6 h-20 inline-block align-middle  text-center text-black bg-transparent font-bold text-xl tracking-wider w-full">
        {"Privacy Policy"}
      </div>

      {/**/}
      <div className="px-5 pb-10 flex-col text-black text-justify ">
        <p>
          At InventNexus, we respect your privacy and are committed to
          protecting your personal information. This privacy policy explains how
          we collect, use, and safeguard your data.
        </p>
        {/*information we collect*/}
        <div className=" pt-10">
          <p className=" font-bold text-blaze-orange-950 pb-2">
            Information We Collect:
          </p>
          <p className="pl-5">
            <b>Personal Information</b>: Name, email, contact details, and other
            information provided during registration. <br></br>
            <b>Usage Data:</b> IP address, browser type, and interaction with
            our site.
            <br></br>
            <b> Cookies: </b>To enhance user experience and track site usage
          </p>
        </div>
        {/*How We Use Your Information*/}
        <div className=" pt-10">
          <p className=" font-bold text-blaze-orange-950 pb-2">
            How We Use Your Information:
          </p>
          <p className="pl-5">
            To provide and improve our services.<br></br> To communicate
            updates, offers, and marketing. <br></br>To analyze site performance
            and user behavior
          </p>
        </div>
        {/*Data Sharing*/}
        <div className=" pt-10">
          <p className=" font-bold text-blaze-orange-950 pb-2">Data Sharing:</p>
          <p className="pl-5">
            We do not sell, trade, or rent your personal information. We may
            share data with trusted partners for operational purposes, under
            strict confidentiality agreements
          </p>
        </div>
        {/*Data Security*/}
        <div className=" pt-10">
          <p className=" font-bold text-blaze-orange-950 pb-2">
            Data Security:
          </p>
          <p className="pl-5">
            We implement industry-standard measures to protect your information.
            However, no online transmission is 100% secure
          </p>
        </div>
        {/* Your Rights*/}
        <div className=" pt-10">
          <p className=" font-bold text-blaze-orange-950 pb-2">Your Rights:</p>
          <p className="pl-5">
            Access and update your personal information, Delete your account and
            data Opt-out of communications and data sharing
          </p>
        </div>
        {/* Cookies and Tracking*/}
        <div className=" pt-10">
          <p className=" font-bold text-blaze-orange-950 pb-2">
            Cookies and Tracking:
          </p>
          <p className="pl-5">
            We use cookies to enhance user experience and track usage You can
            manage cookie preferences in your browser settings
          </p>
        </div>
        {/* Changes to This Policy*/}
        <div className=" pt-10">
          <p className=" font-bold text-blaze-orange-950 pb-2">
            Changes to This Policy:
          </p>
          <p className="pl-5">
            We will notify you of significant changes to this policy, we
            encourage you to review this policy regularly
          </p>
        </div>
        {/*   Third-Party Links*/}
        <div className=" pt-10">
          <p className=" font-bold text-blaze-orange-950 pb-2">
            Third-Party Links:
          </p>
          <p className="pl-5">
            Our site may contain links to third-party websites. We are not
            responsible for their privacy practices.
          </p>
        </div>

        {/* Contact Us*/}
        <div className=" pt-10">
          <p className=" font-bold text-blaze-orange-950 pb-2">Contact Us:</p>
          <p className="pl-5">
            If you have questions or concerns, please contact us at
            inventnexus1@gmail.com
          </p>
        </div>

        {/* commiotted to protecting you*/}
        <div className=" pt-10">
          By using InventNexus, you consent to this privacy policy. We are
          committed to protecting your privacy and look forward to innovating
          together!
        </div>
      </div>
    </div>
  );
}
