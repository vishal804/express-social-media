import React, { useState } from "react";
import "./profileEditModal.css";
import { useDispatch } from "react-redux";
import { updateHandler } from "../../redux/reducer/authenticationSlice";

const ProfileEditModal = ({ setIsEdit, user }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ ...user });

  return (
    <>
      <div className="edit-profile">
        <div className="editProfile-container">
          <div className="close-btn" onClick={() => setIsEdit(false)}>
            <i className="fas fa-times"></i>
          </div>
          <img
            src={userData.profilePicture}
            alt="ProfilePicture"
            className="profile-image"
          />

          <div className="profile-content">
            <p className="form-label">Name</p>

            <input
              className="input"
              type="text"
              value={userData.firstName}
              onChange={(event) =>
                setUserData({ ...userData, firstName: event.target.value })
              }
            />
            <input
              className="input"
              type="text"
              value={userData.lastName}
              onChange={(event) =>
                setUserData({ ...userData, lastName: event.target.value })
              }
            />
            <p className="form-label">Bio</p>

            <textarea
              className="input"
              value={userData.bio}
              onChange={(event) =>
                setUserData({ ...userData, bio: event.target.value })
              }
            ></textarea>

            <p className="form-label">website</p>
            <input
              className="input"
              type="text"
              value={userData.link}
              onChange={(event) =>
                setUserData({ ...userData, link: event.target.value })
              }
            />
          </div>
          <button
            className="btn"
            onClick={() => {
              dispatch(updateHandler(userData));
              setIsEdit(false);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export { ProfileEditModal };
