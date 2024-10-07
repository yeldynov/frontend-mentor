import React from "react";

const BentoGrid = () => {
  return (
    <div className="w-full h-full mx-auto text-lg bg-gray-200 text-bentoBlack max-w-screen-8xl">
      <div className="container flex items-center justify-center mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:grid-rows-6 lg:mx-40 lg:my-20 lg:w-full">
          {/* card */}
          <div className="flex flex-col gap-8 pt-20 rounded-md bg-bentoYellow-light p-7 sm:row-span-3">
            <p className="text-4xl leading-none tracking-tight">
              Create and schedule content{" "}
              <span className="italic text-bentoPurple">quicker.</span>
            </p>
            <a href="/" className="">
              <img
                src="/bento-grid/illustration-create-post.webp"
                alt="button"
              />
            </a>
          </div>
          {/* card */}
          <div className="flex flex-col items-center justify-center py-16 text-center text-white rounded-md bg-bentoPurple sm:col-span-2 sm:row-span-2">
            <p className="mb-5 text-6xl leading-none tracking-tight">
              Social Media <span className="text-bentoYellow">10x</span>{" "}
              <span className="italic">Faster</span> with AI
            </p>
            <a href="/" className="w-1/3 mb-1">
              <img
                src="/bento-grid/illustration-five-stars.webp"
                alt="button"
              />
            </a>
            <p className="">Over 4,000 5-start reviews</p>
          </div>
          {/* card */}
          <div className="flex flex-col gap-2 pt-12 pb-0 pl-8 overflow-hidden rounded-md bg-bentoPurple-light sm:col-start-4 sm:row-span-4">
            <p className="mb-5 text-3xl leading-none tracking-tight">
              Schedule to social media
            </p>
            <div className="w-[350px]">
              <img
                src="/bento-grid/illustration-schedule-posts.webp"
                alt="Schedule to social media"
              />
            </div>
            <p className="pt-5 pr-6 leading-5">
              {" "}
              Optimize post timings to publish content at the perfect time for
              your audience.
            </p>
          </div>
          {/* card */}
          <div className="flex flex-col gap-3 p-5 overflow-hidden rounded-md bg-bentoWhite sm:col-start-2 sm:row-span-2 sm:row-start-3">
            <div className="w-[320px]">
              <img
                src="/bento-grid/illustration-multiple-platforms.webp"
                alt="Schedule to social media"
              />
            </div>
            <p className="text-3xl leading-none">
              Manage multiple accounts and platforms.
            </p>
          </div>
          {/* card */}
          <div className="relative flex flex-col gap-3 p-5 overflow-hidden rounded-md bg-bentoYellow sm:col-start-3 sm:row-span-2 sm:row-start-3">
            <p className="text-3xl leading-none">
              Maintain a consistent posting schedule.
            </p>
            <div className="absolute left-0 right-0 mx-5 -bottom-20">
              <img
                src="/bento-grid/illustration-consistent-schedule.webp"
                alt="Schedule to social media"
              />
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col justify-between p-5 overflow-hidden rounded-md bg-bentoYellow sm:row-span-3 sm:row-start-4">
            <p className="text-4xl leading-none tracking-tight">
              Write your content using AI
            </p>
            <img
              src="/bento-grid/illustration-ai-content.webp"
              alt="Schedule to social media"
            />
          </div>
          {/* card */}
          <div className="flex flex-col justify-between p-5 overflow-hidden rounded-md bg-bentoWhite sm:col-start-2 sm:row-span-2 sm:row-start-5">
            <div className="flex flex-col gap-4">
              <p className="leading-none tracking-tight text-7xl">&gt;56%</p>
              <p className="leading-none tracking-tight">
                faster audience growth
              </p>
            </div>
            <img
              src="/bento-grid/illustration-audience-growth.webp"
              alt="Schedule to social media"
            />
          </div>
          {/* card */}
          <div className="flex justify-between gap-5 p-5 overflow-hidden text-white rounded-md bg-bentoPurple sm:col-span-2 sm:col-start-3 sm:row-span-2 sm:row-start-5">
            <div className="flex items-center w-2/5">
              <img
                src="/bento-grid/illustration-grow-followers.webp"
                alt="Schedule to social media"
                className=""
              />
            </div>
            <p className="flex items-center w-3/5 text-4xl leading-none tracking-tight">
              Grow followers with non-stop content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
