"use client";
import { useState } from "react";

const TestimonialSliderPage = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    {
      id: 1,
      text: `“ I’ve been interested in coding for a while but never taken the
              jump, until now. I couldn’t recommend this course enough. I’m now
              in the job of my dreams and so excited about the future. ”`,
      name: "Tanya Sinclair",
      position: "UX Engineer",
      img: "image-tanya.jpg",
    },
    {
      id: 2,
      text: `“ If you want to lay the best foundation possible I’d recommend
              taking this course. The depth the instructors go into is
              incredible. I now feel so confident about starting up as a
              professional developer. ”`,
      name: "John Tarkpor",
      position: "Junior Front-end Engineer",
      img: "image-john.jpg",
    },
  ];

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="text-testimonialDarkBlue relative mx-auto flex h-full w-full max-w-screen-8xl items-center justify-center font-inter text-base">
      {/* Buttons */}
      <div className="absolute right-1/2 top-[420px] z-20 h-10 w-20 translate-x-1/2 rounded-[50px] bg-gray-100 lg:top-[500px]">
        <div
          onClick={prevSlide}
          className="absolute left-0 h-full w-1/2 cursor-pointer bg-[url(/testimonials-slider/icon-prev.svg)] bg-center bg-no-repeat hover:scale-125"
        ></div>
        <div
          onClick={nextSlide}
          className="absolute right-0 h-full w-1/2 cursor-pointer bg-[url(/testimonials-slider/icon-next.svg)] bg-center bg-no-repeat hover:scale-125"
        ></div>
      </div>

      <div className="container mx-auto mt-16 flex w-full flex-col gap-8 overflow-hidden rounded-2xl bg-white bg-cover bg-no-repeat p-8 lg:w-4/5">
        <div
          className="slides-wrapper flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div
              key={s.id}
              className="slide flex w-full flex-shrink-0 flex-col-reverse items-center justify-center text-center lg:flex-row lg:text-left"
            >
              {/* left - testimonial */}
              <div className="flex flex-1 flex-col gap-10 bg-[url(/testimonials-slider/pattern-quotes.svg)] bg-top bg-no-repeat px-[51px] py-8 lg:translate-x-[100px] lg:bg-left-top lg:p-0 lg:pt-8">
                {/* blockquote */}
                <p className="text-2xl font-light leading-10">{s.text}</p>
                <p className="flex flex-col gap-4 text-lg font-bold lg:flex-row">
                  {s.name}{" "}
                  <span className="text-testimonialGrayishBlue font-normal">
                    {s.position}
                  </span>
                </p>
              </div>

              {/* right */}
              <div className="slide mb-10 flex w-full flex-1 items-center justify-center bg-[url(/testimonials-slider/pattern-bg.svg)] bg-contain bg-center bg-no-repeat p-[30px] lg:p-[55px]">
                <img
                  className="block w-[240px] rounded-[10px] shadow-xl lg:w-[400px]"
                  src={`/testimonials-slider/${s.img}`}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSliderPage;
