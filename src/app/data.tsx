import avatar_angela from "@/assets/images/avatar-angela-gray.webp";
import avatar_anna from "@/assets/images/avatar-anna-kim.webp";
import jacob from "@/assets/images/avatar-jacob-thompson.webp";
import markWebber from '@/assets/images/avatar-mark-webber.webp'
import angelaGray from '@/assets/images/avatar-angela-gray.webp';
import jacobThompson from '@/assets/images/avatar-jacob-thompson.webp';
import rizky from '@/assets/images/avatar-rizky-hasanuddin.webp';
import kimberly from '@/assets/images/avatar-kimberly-smith.webp';
import nathan from '@/assets/images/avatar-nathan-peterson.webp';
import anna from '@/assets/images/avatar-anna-kim.webp';
import chess from '@/assets/images/image-chess.webp'


// export interface NotificationItem {
//   user: string;
//   userImage?: string; // Add the 'userImage' property with the URL of the user's image here
//   action: string;
//   post?: string;
//   group?: string;
//   message?: string;
//   picture?: string;
//   timeAgo: string;
//   read: boolean;
// }

export const socialMediaActivity = [
  {
    user: "Mark Webber",
    userImage: markWebber,
    action: "reacted to your recent post",
    post: "My first tournament today!",
    timeAgo: "1m ago",
    read: false // Set to false for the first notification
  },
  {
    user: "Angela Gray",
    userImage: angelaGray,
    action: "followed you",
    timeAgo: "5m ago",
    read: false // Set to false for the second notification
  },
  {
    user: "Jacob Thompson",
    userImage: jacobThompson,
    action: "has joined your group",
    group: "Chess Club",
    timeAgo: "1 day ago",
    read: false // Set to false for the third notification
  },
  {
    user: "Rizky Hasanuddin",
    userImage: rizky,
    action: "sent you a private message",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    timeAgo: "5 days ago",
    read: true // Set to true for the fourth notification and the rest
  },
  {
    user: "Kimberly Smith",
    userImage: kimberly,
    action: "commented on your picture",
    picture: chess,
    timeAgo: "1 week ago",
    read: true
  },
  {
    user: "Nathan Peterson",
    userImage: nathan,
    action: "reacted to your recent post",
    post: "5 end-game strategies to increase your win rate",
    timeAgo: "2 weeks ago",
    read: true
  },
  {
    user: "Anna Kim",
    userImage: anna,
    action: "left the group",
    group: "Chess Club",
    timeAgo: "2 weeks ago",
    read: true
  }
];