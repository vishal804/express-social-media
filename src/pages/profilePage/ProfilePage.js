import React, { useState } from "react";
import "./profilePage.css";
import { useSelector } from "react-redux";
import { ProfileEditModal, SideNav } from "../../component";

const ProfilePage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { user } = useSelector((store) => store.authentication);

  return (
    <>
      <div className="feed-container">
        <SideNav />
        <main className="post-container">
          {isEdit ? (
            <ProfileEditModal setIsEdit={setIsEdit} user={user} />
          ) : null}

          <div className="profile">
            <img
              src={user.profilePicture}
              alt="ProfilePicture"
              className="profile-image"
            />
            <div className="titlename">
              {user.firstName} {user.lastName}
            </div>
            <button
              className="btn btn-primary btn-style"
              onClick={() => setIsEdit(true)}
            >
              Edit Profile
            </button>
            <p>{user.bio}</p>
            <p style={{ margin: "1rem" }}>{user.link}</p>
            <div className="followers-details">
              <div>
                <p className="follow">{user.following.length}</p>
                <p>Following</p>
              </div>
              <div>
                <p className="follow">2k</p>
                <p>Posts</p>
              </div>
              <div>
                <p className="follow">{user.followers.length}</p>
                <p>Followers</p>
              </div>
            </div>
          </div>

          <section>
            <p className="text-style">Your Posts</p>
          </section>
        </main>
      </div>
    </>
  );
};

export { ProfilePage };
