"use client"

import Image from "next/image";
import { useState } from "react";
import { socialMediaActivity } from "./data";
import { Notification } from "@/components/Notifications";

export default function Home() {

  const [notifications, setNotifications] = useState(socialMediaActivity);

  function handleMarkAsRead() {
    setNotifications(notifications.map((notification) => ({...notification, read: true })));
  }
  return (
   <main className="bg-Light-Grayish-Blue-1 min-h-screen w-full flex items-center justify-center sm:p-10">
      <div className="max-w-2xl mx-auto pt-8 bg-White rounded-md px-4 sm:px-6">
        <div className="flex justify-between items-center mb-6 gap-6">
          <h1 className="text-2xl flex gap-3 items-center font-semibold">Notifications
            <span className="bg-Blue text-white px-[10px] rounded-md text-lg transition-all">
              {notifications.filter((notification) => notification.read === false).length}
            </span>
          </h1>
          <button type="button" onClick={handleMarkAsRead} className="hover:text-Blue font-extrabold tracking-tight text-Grayish-Blue">Mark all as read </button>
        </div>

        <div className="flex gap-4 flex-col">
          {notifications.map((notification, index) => (
             <Notification
             read={notification.read}
             key={index}
             action={notification.action}
             timeAgo={notification.timeAgo}
             user={notification.user}
             userImage={notification.userImage} // Pass the userImage property
             group={notification.group}
             message={notification.message}
             picture={notification.picture}
             post={notification.post}
           />
          ))}
        </div>
      </div>
   </main>
  );
}
