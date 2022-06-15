import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { image1, image2, image3, image4, image5 } from "../../assets";
/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  //1
  {
    _id: uuid(),
    firstName: "MS",
    lastName: "Dhoni",
    profilePicture: image3,
    content: "Work on your goals a little bit each day, no matter how small.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "msdhoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Steve",
        lastName: "Roger",
        username: "steveroger",
        profilePicture: image1,
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Tony",
        lastName: "Stark",
        username: "tonystark",
        profilePicture: image2,
        text: "Nice",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //2

  {
    _id: uuid(),
    firstName: "Steve",
    lastName: "Roger",
    profilePicture: image1,
    content: "No shortcut ever gave you what you deserved.",
    likes: {
      likeCount: 11,
      likedBy: [],
      dislikedBy: [],
    },
    username: "steveroger",

    comments: [
      {
        _id: uuid(),
        firstName: "MS",
        lastName: "Dhoni",
        username: "msdhoni",
        profilePicture: image3,
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Tony",
        lastName: "Stark",
        username: "tonystark",
        profilePicture: image2,
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  //

  {
    _id: uuid(),
    firstName: "Stuart",
    lastName: "Anderwood",
    profilePicture: image4,
    content: "A great man is strong because he can be gentle.",
    likes: {
      likeCount: 11,
      likedBy: [],
      dislikedBy: [],
    },
    username: "stuartanderwood",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Steve",
        lastName: "Roger",
        username: "steveroger",
        profilePicture: image1,
        text: "Nice",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //

  {
    _id: uuid(),
    firstName: "Tony",
    lastName: "Stark",
    profilePicture: image2,
    content: "Work hard then work harder.",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tonystark",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Steve",
        lastName: "Roger",
        username: "steveroger",
        profilePicture: image1,
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //

  {
    _id: uuid(),
    firstName: "James",
    lastName: "Patel",
    profilePicture: image5,
    content:
      "Entrepreneur is someone who has a vision for something and a want to create.",
    likes: {
      likeCount: 19,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jamespatel",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Tony",
        lastName: "Stark",
        username: "tonystark",
        profilePicture: image2,
        text: "Good",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    firstName: "Steve",
    lastName: "Roger",
    profilePicture: image1,
    content: "Ideas are easy. Implementation is hard.",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "steveroger",

    comments: [
      {
        _id: uuid(),
        firstName: "Stuart",
        lastName: "Anderwood",
        username: "stuartanderwood",
        profilePicture: image4,
        text: "Good",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "James",
        lastName: "Patel",
        username: "jamespatel",
        profilePicture: image5,
        text: "Work Holic",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
