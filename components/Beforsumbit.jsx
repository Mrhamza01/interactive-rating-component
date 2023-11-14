import React from "react";
import Image from "next/image";
import Button from "./Button";
const Beforsumbit = ({ setSubmitted, setItem, item }) => {
  return (
    <>
      <div className="h-screen flex mx-auto justify-center items-center bg-Very-Dark-Blue">
        <div className="bg-Dark-Blue w-80 h-80 p-6 rounded-lg flex mx-auto justify-center ">
          <div>
            <div className="bg-Medium-Grey  w-8 h-8 rounded-full flex items-center justify-center">
              <Image
                src="/images/icon-star.svg"
                width={15}
                height={15}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h1 className="font-bold text-White text-lg mt-3 font-Overpass">
                How did we do?
              </h1>
            </div>
            <div>
              <p className="font-normal text-sm mt-2 text-Light-Grey font-Overpass">
                please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div className="flex gap-4 mb-4 font-Overpass  mx-auto  justify-center">
              <div className="text-Light-Grey hover:bg-Orange active:bg-Light-Grey active:text-White w-8 h-8 rounded-full flex items-center justify-center ">
                <Button number={1} item={item} setItem={setItem} />
              </div>
              <div className="text-Light-Grey hover:bg-Orange active:bg-Light-Grey active:text-White w-8 h-8 rounded-full flex items-center justify-center">
                <Button number={2} item={item} setItem={setItem} />
              </div>
              <div className="text-Light-Grey hover:bg-Orange active:bg-Light-Grey active:text-White w-8 h-8 rounded-full flex items-center justify-center">
                <Button number={3} item={item} setItem={setItem} />
              </div>
              <div className="text-Light-Grey hover:bg-Orange active:bg-Light-Grey active:text-White w-8 h-8 rounded-full flex items-center justify-center">
                <Button number={4} item={item} setItem={setItem} />
              </div>
              <div className="text-Light-Grey  hover:bg-Orange active:bg-Light-Grey active:text-White w-8 h-8 rounded-full flex items-center justify-center ">
                <Button number={5} item={item} setItem={setItem} />
              </div>
            </div>
            <div className="mx-auto flex justify-center">
              <button
                className=" bg-Orange w-60 h-10 rounded-full text-White text-sm font-semibold font-Overpass hover:bg-White hover:text-Orange"
                onClick={() => setSubmitted(true)}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beforsumbit;
