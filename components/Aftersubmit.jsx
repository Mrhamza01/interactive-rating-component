import Image from "next/image";
import React, { useState } from "react";

const Aftersubmit = ({ setSubmitted, item, setItem }) => {
  return (
    <>
      <div className="h-screen flex mx-auto justify-center items-center bg-Very-Dark-Blue">
        <div className="bg-Dark-Blue w-80 h-80 p-6 rounded-lg ">
          <div>
            <Image
              src="/images/illustration-thank-you.svg"
              width={150}
              height={150}
              alt="Picture of the author"
              className=" mx-auto"
            />
          </div>
          <div className="flex justify-center text-xs mt-4 text-Orange bg-Light-Grey bg-opacity-20 rounded-xl w-48 p-1 mx-auto">
            <p>Your selected number {item} out of 5</p>
          </div>
          <div className="font-extrabold text-White text-xl font-Overpass flex  justify-center mt-6">
            <h2>Thank You!</h2>
          </div>
          <div className="font-sm text-Light-Grey text-sm font-Overpass flex  justify-center mt-3">
            <p>
              We appreciate you taking he time to a rating. if you ever need
              more support don't hesitate to get in touch!
            </p>
          </div>
          <div className="mx-auto flex justify-center">
            <button
              className="bg-Orange w-60 h-7 rounded-full text-White text-sm font-semibold font-Overpass hover:bg-White hover:text-Orange  "
              onClick={() => setSubmitted(false)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aftersubmit;
