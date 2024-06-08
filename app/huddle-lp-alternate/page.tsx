import React from "react";

const HuddlePage = () => {
  return (
    <div className="text-huddle-dark-cyan w-[375px] font-sans text-lg lg:w-[1440px]">
      <header className="h-screen bg-opacity-50 bg-[url('/huddle-lp-alternate/bg-hero-desktop.svg')] bg-cover">
        <div className="flex flex-col px-20 pt-12">
          {/* nav */}
          <div className="flex w-full items-center justify-between">
            <img
              className="w-[200px]"
              src="/huddle-lp-alternate/logo.svg"
              alt="Logo"
            />
            <button className="flex h-12 w-[200px] cursor-pointer items-center justify-center rounded-3xl bg-white text-sm font-bold shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:opacity-70">
              Try It Free
            </button>
          </div>
          {/* hero */}
          <div className="flex items-center justify-between">
            {/* text */}
            <div className="w-1/2">
              <h1>Build The Community Your Fans Will Love</h1>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.{" "}
              </p>
              <button>Get Started For Free</button>
            </div>
            {/* image */}
            <div className="w-1/2">
              <img src="/huddle-lp-alternate/illustration-mockups.svg" alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HuddlePage;
