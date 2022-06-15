import React from "react";
import "./followUnfollow.css";
import { useDispatch } from "react-redux";
import {
  userFollow,
  userUnfollow,
} from "../../redux/reducer/authenticationSlice";

const FollowUnfollow = ({ users, user }) => {
  const dispatch = useDispatch();

  const usersNotFollowed = users.filter(
    (item) =>
      item.username !== user.username &&
      !user.following.some((user) => user.username === item.username)
  );

  return (
    <>
      <div className="leftsidebar">
        <div className="leftside-nav-title">who to follow</div>

        {usersNotFollowed.map((userOne) => (
          <div className="follow-people" key={userOne._id}>
            <span>
              <img
                className="image"
                src={userOne.profilePicture}
                alt="ProfilePicture"
              />
            </span>
            {userOne.firstName} {userOne.lastName}
            <span
              className="followbtn-style"
              onClick={() => {
                dispatch(userFollow(userOne._id));
              }}
            >
              Follow
            </span>
          </div>
        ))}

        <div className="leftside-nav-title">Recent Following</div>

        <div className="leftside-nav">
          {user.following.map((userOne) => (
            <div className="follow-people" key={userOne._id}>
              <span>
                <img
                  className="image"
                  src={userOne.profilePicture}
                  alt="ProfilePicture"
                />
              </span>
              {userOne.firstName} {userOne.lastName}
              <span
                className="followbtn-style"
                onClick={() => {
                  dispatch(userUnfollow(userOne._id));
                }}
              >
                Unfollow
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { FollowUnfollow };
