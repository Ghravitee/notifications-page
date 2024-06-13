"use client"


import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { socialMediaActivity } from "@/app/data";

export function Notification({
  user,
  userImage,
  action,
  post,
  group,
  message,
  picture,
  timeAgo,
  read
}: any) {
  const [animationParent] = useAutoAnimate();
  


  return (
    <div
    
      className={`${!read ? "bg-Very-Light-Grayish-Blue" : ""} p-4 transition-all rounded-md`}
    >
      <div className="flex items-start gap-2 w-full ">
        {/* user image  */}
        <Image
          width={40}
          height={40}
          src={userImage}
          alt={`Profile of ${user}`}
          className=" rounded-full mr-2"
        />

        <section className="flex flex-col w-full">
          {/* details */}
          <div className="flex w-full justify-between gap-2 ">
            <div ref={animationParent} className="space-x-2 text-[0.8rem]">
              <span className="md:text-[0.9rem] whitespace-nowrap text-Very-Dark-Blue hover:text-Blue font-extrabold cursor-pointer">{user}</span>
              <span className="md:text-[0.9rem]">{action}</span>

              {action === "reacted to your recent post" && (
                <span className="cursor-pointer text-gray-500 font-extrabold hover:text-Blue md:text-[0.9rem]">
                  {post}
                </span>
              )}

                {
                  group === "Chess Club" && (
                    <span className="md:text-[0.9rem] font-extrabold text-Blue cursor-pointer">{group}</span>
                  )
                }
              {/* red notification */}
              {read === false && (
                <span
                  className="bg-Red h-2 w-2 min-2 inline-block rounded-full "
                />
              )}
            </div>

            {picture && (
              <Image
                width={50}
                height={50}
                src={picture ?? ""}
                alt="Commented on your picture"
                className="h-10 w-10 rounded-lg cursor-pointer"
              />
            )}
          </div>
          {/* time */}
          <span
            className="text-Grayish-Blue text-sm "
          >
            {timeAgo}
          </span>
          {action === "sent you a private message" && (
            <p className="border rounded p-3 mt-2  text-gray-500 hover:bg-blue-100 cursor-pointer">
              {message}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}