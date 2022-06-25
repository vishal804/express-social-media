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
            <div className="follow-person">
              <p>
                <img
                  className="image"
                  src={userOne.profilePicture}
                  alt="ProfilePicture"
                />
              </p>
              <p>
                {userOne.firstName} {userOne.lastName}
              </p>
            </div>

            <div
              className="followbtn-style"
              onClick={() => {
                dispatch(userFollow(userOne._id));
              }}
            >
              Follow
            </div>
          </div>
        ))}

        <div className="leftside-nav-title">Recent Following</div>

        <div className="leftside-nav">
          {user.following.map((userOne) => (
            <div className="follow-people" key={userOne._id}>
              <div className="follow-person">
                <p>
                  <img
                    className="image"
                    src={userOne.profilePicture}
                    alt="ProfilePicture"
                  />
                </p>
                <p>
                  {userOne.firstName} {userOne.lastName}
                </p>
              </div>

              <div
                className="followbtn-style"
                onClick={() => {
                  dispatch(userUnfollow(userOne._id));
                }}
              >
                Unfollow
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { FollowUnfollow };
