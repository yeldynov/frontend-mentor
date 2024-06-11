import React from "react";

const HuddlePage = () => {
  return (
    <div className="text-huddle-dark-cyan min-w-[375px] font-sans text-lg lg:max-w-[1440px]">
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

      <main className="mx-5 mt-5 flex flex-col items-center justify-center gap-10 md:mx-[105px] md:mt-36">
        <section className="flex flex-col-reverse items-center justify-between gap-12 rounded-2xl bg-white px-9 py-[56px] pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:flex-row md:gap-0 md:p-10 md:py-10">
          <div className="flex flex-col justify-center gap-5 pt-5 text-center md:gap-4 md:pl-20 md:pt-4 md:text-left">
            <h2 className="font-poppins text-[22px] font-semibold md:text-[28px]">
              Grow Together
            </h2>
            <p className="text-base md:w-[80%] md:text-lg">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>

          <div className="mt-2 w-[85%] md:ml-10 md:mt-0 md:w-4/5 md:py-3">
            <img
              className="md:ml-3"
              src="/huddle-lp-alternate/illustration-grow-together.svg"
              alt=""
            />
          </div>
        </section>

        <section className="flex flex-col-reverse items-center justify-between gap-12 rounded-2xl bg-white px-9 py-[56px] pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:flex-row md:gap-0 md:p-10 md:py-10">
          <div className="mt-2 w-[85%] md:ml-10 md:mt-0 md:w-4/5 md:py-3">
            <img
              className="md:ml-3"
              src="/huddle-lp-alternate/illustration-flowing-conversation.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center gap-5 pt-5 text-center md:gap-4 md:pl-20 md:pt-4 md:text-left">
            <h2 className="font-poppins text-[22px] font-semibold md:text-[28px]">
              Flowing Conversations
            </h2>
            <p className="text-base md:text-lg">
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
        </section>

        <section className="flex flex-col-reverse items-center justify-between gap-12 rounded-2xl bg-white px-9 py-[56px] pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:flex-row md:gap-0 md:p-10 md:py-10">
          <div className="flex flex-col justify-center gap-5 pt-5 text-center md:gap-4 md:pl-20 md:pt-4 md:text-left">
            <h2 className="font-poppins text-[22px] font-semibold md:text-[28px]">
              Your Users
            </h2>
            <p className="text-base md:w-[80%] md:text-lg">
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>

          <div className="mt-2 w-[85%] md:ml-10 md:mt-0 md:w-4/5 md:py-3">
            <img
              className="md:ml-3"
              src="/huddle-lp-alternate/illustration-your-users.svg"
              alt=""
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HuddlePage;
