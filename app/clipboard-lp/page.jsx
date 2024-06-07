import Link from "next/link";
import React from "react";

const ClipboardPage = () => {
  return (
    <div className="w-[375px] font-baijam text-lg text-dark-grayish-blue lg:w-[1440px]">
      {/* HERO */}
      <section
        className="flex flex-col items-center justify-center bg-[url('/clipboard-lp/bg-header-desktop.png')] bg-cover py-32"
        id="hero"
      >
        <img className="pb-16" src="/clipboard-lp/logo.svg" alt="" />
        <h1 className="px-5 pb-[22px] text-center text-3xl font-medium tracking-wide text-dark-grayish-blue lg:text-5xl lg:tracking-tight">
          A history of everything you copy
        </h1>
        <p className="px-9 text-center text-base font-light text-grayish-blue md:w-1/2 md:text-xl md:leading-[30px] md:tracking-[0.015em]">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-6 pt-[50px] font-medium tracking-wider md:flex-row md:gap-4">
          <button className="w-[83%] rounded-full bg-strong-cyan px-8 py-[14px] text-white shadow-lg hover:bg-opacity-75 md:w-fit">
            Download for iOS
          </button>
          <button className="w-[83%] rounded-full bg-light-blue px-8 py-[14px] text-white hover:bg-opacity-75 md:w-fit">
            Download for Mac
          </button>
        </div>
      </section>
      {/* FEATURES */}
      <section id="features" className="flex flex-col pt-9 md:pt-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="px-10 pb-[22px] text-center text-[28px] font-medium leading-[33px] text-dark-grayish-blue md:text-4xl">
            Keep track of your snippets
          </h1>
          <p className="px-10 text-center text-base font-light leading-[23px] tracking-[0.015em] text-grayish-blue md:w-1/2 md:px-0 md:text-lg md:leading-[30px]">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
        <div className="flex flex-col justify-end pt-[75px] md:flex-row md:pt-20">
          <div>
            <img
              className="px-8 md:absolute md:-left-8 md:px-0"
              src="/clipboard-lp/image-computer.png"
              alt="Computer"
            />
          </div>
          <ul className="flex flex-col gap-10 px-10 pt-14 md:w-1/2 md:gap-14 md:px-28 md:pt-16">
            <li className="flex flex-col gap-2 text-center md:w-[70%] md:gap-3 md:text-left">
              <h3 className="text-center text-2xl font-medium tracking-[-0.018em] md:text-left">
                Quick Search
              </h3>
              <p className="text-base leading-7 text-grayish-blue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </li>
            <li className="flex flex-col gap-1 text-center md:w-[70%] md:gap-2 md:text-left">
              <h3 className="text-center text-2xl font-medium tracking-tight md:text-left">
                iCloud Sync
              </h3>
              <p className="text-base leading-[30px] text-grayish-blue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </li>
            <li className="flex flex-col gap-2 pt-1 text-center md:w-[70%] md:pt-0 md:text-left">
              <h3 className="text-center text-2xl font-medium tracking-[-0.018em] md:text-left">
                Complete History
              </h3>
              <p className="text-base leading-7 text-grayish-blue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* ACCESS */}
      <section className="flex flex-col items-center justify-center pt-16 md:pt-32">
        <div className="flex flex-col items-center justify-center pt-[125px]">
          <h1 className="px-10 pb-[22px] text-center text-[28px] font-medium leading-[33px] text-dark-grayish-blue md:text-4xl">
            Access Clipboard Anywhere
          </h1>
          <p className="px-10 text-center text-base font-light leading-[22px] tracking-[0.015em] text-grayish-blue md:w-3/4 md:px-0 md:text-lg md:leading-[30px]">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
        </div>
        <div className="mt-11 px-4 md:mt-[99px]">
          <img src="/clipboard-lp/image-devices.png" alt="Devices" />
        </div>
      </section>

      {/* TOOLS */}
      <section className="flex flex-col items-center justify-center pt-[100px] md:pt-[74px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="px-10 pb-3 text-center text-[28px] font-medium leading-[33px] text-dark-grayish-blue md:pb-[22px] md:text-4xl">
            Supercharge your workflow
          </h1>
          <p className="px-10 text-center text-base font-light leading-[28px] tracking-[0.015em] text-grayish-blue md:text-lg md:leading-[30px]">
            We’ve got the tools to boost your productivity.
          </p>
        </div>
        {/* perks */}
        <div className="flex w-full flex-col items-start gap-12 px-8 pt-[88px] md:flex-row md:gap-5 md:px-40 md:pt-[70px]">
          <div className="flex flex-col items-center justify-center text-center md:w-1/3">
            <img
              className="pb-10"
              src="/clipboard-lp/icon-blacklist.svg"
              alt="Icon"
            />
            <h4 className="pb-4 text-2xl font-medium">Create blacklists</h4>
            <p className="text-base leading-7">
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center md:w-1/3">
            <img
              className="pb-12"
              src="/clipboard-lp/icon-text.svg"
              alt="Icon"
            />
            <h4 className="pb-4 text-2xl font-medium"> Plain text snippets</h4>
            <p className="text-base leading-7">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center md:w-1/3">
            <img
              className="pb-12"
              src="/clipboard-lp/icon-preview.svg"
              alt="Icon"
            />
            <h4 className="pb-4 text-2xl font-medium">Sneak preview</h4>
            <p className="text-base leading-7">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
        {/* sponsors */}
        <div className="flex flex-col flex-wrap items-center justify-between gap-16 pt-32 text-center md:flex-row md:gap-24 md:pt-40">
          <img
            className="w-[80%] md:w-fit"
            src="/clipboard-lp/logo-google.png"
            alt=""
          />
          <img
            className="w-[75%] md:w-fit"
            src="/clipboard-lp/logo-ibm.png"
            alt=""
          />
          <img
            className="w-[80%] md:w-fit"
            src="/clipboard-lp/logo-microsoft.png"
            alt=""
          />
          <img
            className="w-[70%] md:w-fit"
            src="/clipboard-lp/logo-hp.png"
            alt=""
          />
          <img
            className="w-[65%] md:w-fit"
            src="/clipboard-lp/logo-vector-graphics.png"
            alt=""
          />
        </div>

        <div className="mt-[162px] flex flex-col items-center justify-center">
          <h1 className="px-9 pb-[18px] text-center text-3xl font-medium tracking-tighter text-dark-grayish-blue md:pb-[22px] md:text-4xl md:tracking-normal">
            Clipboard for iOS and Mac OS
          </h1>
          <p className="px-10 text-center text-base font-light leading-[24px] tracking-[0.015em] text-grayish-blue md:w-2/3 md:text-lg md:leading-[30px]">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
          <div className="flex w-full flex-col items-center justify-center gap-6 pt-[50px] font-medium tracking-wider md:flex-row md:gap-4">
            <button className="w-[83%] rounded-full bg-strong-cyan px-8 py-[14px] text-white shadow-lg hover:bg-opacity-75 md:w-fit">
              Download for iOS
            </button>
            <button className="w-[83%] rounded-full bg-light-blue px-8 py-[14px] text-white hover:bg-opacity-75 md:w-fit">
              Download for Mac
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-[147px] flex flex-col items-center justify-between gap-20 bg-[#f4f6f8] py-[74px] md:flex-row md:px-[165px] md:py-[42px]">
        {/* links */}
        <div className="flex flex-col items-center gap-10 text-center text-dark-grayish-blue md:flex-row md:items-start md:gap-[134px] md:text-left">
          <div className="">
            <img className="h-14 w-14" src="/clipboard-lp/logo.svg" alt="" />
          </div>
          <div className="-mt-1 flex flex-col gap-10 md:flex-row md:gap-24">
            <div className="flex flex-col md:gap-[14px]">
              <Link className="hover:text-strong-cyan" href="/">
                FAQs
              </Link>
              <Link className="hover:text-strong-cyan" href="/">
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col md:gap-[14px] md:pl-[2px]">
              <Link className="hover:text-strong-cyan" href="/">
                Privacy Policy
              </Link>
              <Link className="hover:text-strong-cyan" href="/">
                Press Kit
              </Link>
            </div>
            <div className="flex flex-col md:-ml-[22px] md:gap-4">
              <Link className="hover:text-strong-cyan" href="/">
                Install Guide
              </Link>
            </div>
          </div>
        </div>
        {/* icons */}
        <div className="flex gap-10 md:gap-6">
          <img
            className="cursor-pointer hover:brightness-150"
            src="/clipboard-lp/icon-facebook.svg"
            alt=""
          />
          <img
            className="cursor-pointer hover:brightness-150"
            src="/clipboard-lp/icon-twitter.svg"
            alt=""
          />
          <img
            className="cursor-pointer hover:brightness-150"
            src="/clipboard-lp/icon-instagram.svg"
            alt=""
          />
        </div>
      </footer>
    </div>
  );
};

export default ClipboardPage;
