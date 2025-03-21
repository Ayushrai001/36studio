import React from "react";

const ClientsSection = () => {
  return (
    <div className="w-full bg-white dark:bg-black py-16 flex justify-center" style={{ paddingLeft: "0px" }}>
      <div className="max-w-xl w-full flex flex-col gap-6 items-center">
        {/* CLIENTS Header */}
        <div className="text-xs font-semibold text-black dark:text-white tracking-wide mt-5">
          CLIENTS
        </div>

        {/* Main Heading */}
        <div className="text-2xl md:text-3xl font-bold text-black dark:text-white leading-tight mt-5 text-center">
          Ready to get your project off the ground?
        </div>

        {/* Description */}
        <div className="text-sm text-gray-800 dark:text-gray-300 max-w-md mt-5 text-center">
          We're currently accepting new clients and are excited to hear from
          you. Get in touch by sending an email to{" "}
          <a
            href="mailto:hello@thirtysixstudio.com"
            className="underline hover:text-black dark:hover:text-white transition-colors"
          >
            hello@thirtysixstudio.com
          </a>{" "}
          or fill out the form below to start your journey with us.
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;