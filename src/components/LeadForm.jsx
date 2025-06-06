import React, { useContext } from "react";
import { SpinnerContext } from "./SpinnerContext";
import { companyDetails } from "../constant";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LeadForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
      name:"Codesena"
    };

    await fetch("https://send-mail-redirect-boostmysites.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div className="flex flex-col gap-4 sm:gap-5 py-[3rem] sm:py-[5rem] px-4">
      <h2 data-aos="fade-up" className="heading-2 text-center">
        Let’s Talk Tech—But Keep It Human
      </h2>
      <p data-aos="fade-up" className="desc text-center max-w-[55rem] mx-auto">
        We're not here to impress with jargon—we're here to help you build
        something that works. Reach out for a consultation, a brainstorm
        session, or even a second opinion. We’ll listen, guide, and build
        alongside you.
      </p>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        data-aos="fade-up"
        className="flex flex-col w-full gap-4 rounded-xl p-4 sm:p-5 bg-tertiary max-w-3xl mx-auto mt-4 sm:mt-5"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Name</label>
            <input
              type="text"
              className="outline-none p-3 sm:p-2 rounded-full bg-white/60 text-secondary text-base"
              placeholder="Name"
              {...register("name", {
                required: "Full name is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Full name is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.name?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Email</label>
            <input
              type="email"
              className="outline-none p-3 sm:p-2 rounded-full bg-white/60 text-secondary text-base"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="error-message">{errors.email?.message}</small>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Phone</label>
            <input
              type="tel"
              className="outline-none p-3 sm:p-2 rounded-full bg-white/60 text-secondary text-base"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[\d\s\-()]{6,14}\d$/,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="error-message">{errors.phone?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Subject</label>
            <input
              type="text"
              className="outline-none p-3 sm:p-2 rounded-full bg-white/60 text-secondary text-base"
              placeholder="Subject"
              {...register("subject", {
                required: "Subject is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Subject is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.subject?.message}</small>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm ml-2">Message</label>
          <textarea
            rows="4"
            className="outline-none p-3 sm:p-2 rounded-2xl bg-white/60 text-secondary text-base"
            placeholder="Message"
            {...register("message", {
              required: "Message is required",
              validate: (val) => {
                if (val.trim() !== "") {
                  return true;
                } else {
                  return "Message is required";
                }
              },
            })}
          />
          <small className="error-message">{errors.message?.message}</small>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="primary-btn mt-3 w-fit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
