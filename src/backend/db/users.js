import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { image1, image2, image3, image4, image5 } from "../../assets";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  //
  {
    _id: uuid(),
    firstName: "MS",
    lastName: "Dhoni",
    username: "msdhoni",
    email: "msdhoni@gmail.com",
    password: "msdhoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: image3,
    link: "seven.com",
    bio: "Owner|Cricket Lover|Investor",
    followers: [],
    following: [],
    bookmarks: [],
  },
  //
  {
    _id: uuid(),
    firstName: "Steve",
    lastName: "Roger",
    username: "steveroger",
    email: "steveroger@gmail.com",
    password: "steveroger",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: image1,
    link: "steveroger.com",
    bio: "Software Developer|Cricket Lover|Works @company",
    followers: [],
    following: [],
    bookmarks: [],
  },
  //
  {
    _id: uuid(),
    firstName: "Tony",
    lastName: "Stark",
    username: "tonystark",
    email: "tonystark@gmail.com",
    password: "tonystark",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: image2,
    link: "starkindustry.com",
    bio: "entrepreneur|Investor|If you Don’t Build your Dream, Someone will hire you to build Others",
    followers: [],
    following: [],
    bookmarks: [],
  },

  //

  {
    _id: uuid(),
    firstName: "Stuart",
    lastName: "Anderwood",
    username: "stuartanderwood",
    email: "stuartanderwood@gmail.com",
    password: "stuartanderwood",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: image4,
    link: "Anderwood.com",
    bio: "Work Holic",
    followers: [],
    following: [],
    bookmarks: [],
  },

  //

  {
    _id: uuid(),
    firstName: "James",
    lastName: "Patel",
    username: "jamespatel",
    email: "jamespatel@gmail.com",
    password: "jamespatel",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: image5,
    link: "Patel.com",
    bio: "entrepreneur|Work Holic",
    followers: [],
    following: [],
    bookmarks: [],
  },
];
