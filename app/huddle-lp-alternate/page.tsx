import React from "react";

const HuddlePage = () => {
  return (
    <div className="text-huddle-dark-cyan min-w-[375px] font-sans text-lg lg:w-[1440px]">
      <header className="bg-opacity-50 bg-[url('/huddle-lp-alternate/bg-hero-desktop.svg')] bg-cover pb-20">
        <div className="flex flex-col px-5 pt-7 md:px-20 md:pt-12">
          {/* nav */}
          <div className="flex w-full items-center justify-between">
            <img
              className="w-[117px] md:w-[200px]"
              src="/huddle-lp-alternate/logo.svg"
              alt="Logo"
            />
            <button className="flex h-[26px] w-[110px] cursor-pointer items-center justify-center rounded-3xl bg-white text-xs font-bold shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:opacity-70 md:h-12 md:w-[200px]">
              Try It Free
            </button>
          </div>
          {/* hero */}
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* text */}
            <div className="flex flex-col items-center gap-[26px] pt-24 text-center md:w-2/5 md:items-start md:pt-20 md:text-left">
              <h1 className="px-10 font-poppins text-[27px] font-semibold leading-[40px] md:px-0 md:text-[40px] md:leading-[60px]">
                Build The Community Your Fans Will Love
              </h1>
              <p className="px-6 leading-[27px] md:px-0 md:leading-normal">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.{" "}
              </p>
              <button className="mt-3 flex h-[45px] w-[275px] cursor-pointer items-center justify-center rounded-3xl bg-[#fe52c0] text-sm font-bold text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:opacity-70 md:mt-1 md:h-14 md:w-[280px]">
                Get Started For Free
              </button>
            </div>
            {/* image */}
            <div className="px-5 pt-[60px] md:w-[695px] md:px-0 md:pt-16">
              <img src="/huddle-lp-alternate/illustration-mockups.svg" alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HuddlePage;
