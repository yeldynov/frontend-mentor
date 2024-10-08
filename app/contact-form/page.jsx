"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Msg = ({ closeToast, toastProps }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-5">
      <img
        className="h-8 w-8"
        src="/contact-form/icon-success-check.svg"
        alt=""
      />
      <h2>Message Sent!</h2>
    </div>
    <p className="text-xs">
      Thanks for completing the form. We'll be in touch soon!
    </p>
  </div>
);

const ContactFormPage = () => {
  const onSubmit = (data) => {
    console.log(data); // Handle form submission
    success();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const success = () => toast(<Msg />);

  return (
    <div className="bg-formGreen-200 mx-auto flex h-screen w-full max-w-screen-8xl items-center justify-center font-karla text-base text-black">
      <div className="container mx-auto mt-16 flex w-full flex-col gap-8 rounded-2xl bg-white p-8 lg:w-1/2">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col justify-between space-y-4 lg:flex-row lg:space-y-0">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="font-medium">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className={`form-input mt-1 w-full cursor-pointer rounded-lg border ${
                  errors.firstName ? "border-red-500" : "border-gray-400"
                } focus:border-formGreen-600 focus:bg-formGreen-200 hover:border-formGreen-600`}
                {...register("firstName", {
                  required: "First Name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="font-medium">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className={`form-input mt-1 w-full cursor-pointer rounded-lg border ${
                  errors.lastName ? "border-red-500" : "border-gray-400"
                } focus:border-formGreen-600 focus:bg-formGreen-200 hover:border-formGreen-600`}
                {...register("lastName", { required: "Last Name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className={`form-input mt-1 w-full cursor-pointer rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-400"
              } focus:border-formGreen-600 focus:bg-formGreen-200 hover:border-formGreen-600`}
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Query Type */}
          <div>
            <label className="block font-medium">Query Type</label>
            <div className="flex w-full justify-between space-x-4">
              <div
                className={`flex w-full cursor-pointer items-center rounded-md border p-4 px-8 ${
                  watch("queryType") === "General"
                    ? "bg-formGreen-200 border-formGreen-600"
                    : "border-gray-300"
                }`}
              >
                <label className="inline-flex cursor-pointer items-center">
                  <input
                    type="radio"
                    value="General"
                    {...register("queryType", {
                      required: "Please select a query type",
                    })}
                  />

                  <span className="ml-2">General Enquiry</span>
                </label>
              </div>
              <div
                className={`flex w-full cursor-pointer items-center rounded-md border p-4 px-8 ${
                  watch("queryType") === "Support"
                    ? "bg-formGreen-200 border-formGreen-600"
                    : "border-gray-300"
                }`}
              >
                <label className="inline-flex cursor-pointer items-center">
                  <input
                    type="radio"
                    value="Support"
                    {...register("queryType", {
                      required: "Please select a query type",
                    })}
                  />

                  <span className="ml-2">Support Request</span>
                </label>
              </div>
            </div>
            {errors.queryType && (
              <p className="text-red-500">{errors.queryType.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className={`form-textarea mt-1 w-full cursor-pointer rounded-lg border ${
                errors.message ? "border-red-500" : "border-gray-400"
              } focus:border-formGreen-600 focus:bg-formGreen-200 hover:border-formGreen-600`}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>

          {/* Consent Policy */}
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register("consent", {
                  required: "You must agree to the privacy policy",
                })}
                className={`form-checkbox`}
              />
              <span className="ml-2">I agree to the privacy policy</span>
            </label>
            {errors.consent && (
              <p className="text-red-500">{errors.consent.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-formGreen-600 w-full rounded p-4 text-white"
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default ContactFormPage;
