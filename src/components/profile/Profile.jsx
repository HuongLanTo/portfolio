import React from "react";
import "./Profile.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_image from "../../assets/profile_image.jpg";

const Profile = () => {
  return (
    <div id="home" className="profile">
      <div className="profile-image">
        <img src={profile_image} alt="" />
      </div>
      <h1>
        Welcome, I'm <span>Serena To</span>
      </h1>
      <p>I'm a software engineer with 6 years of experience.</p>
      <div className="profile-action">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <div className="profile-connect">Connect with me</div>
        </AnchorLink>
        <a href="Serena_To_Resume.pdf" target="_blank">
          <div className="profile-resume">My resume</div>
        </a>
      </div>
    </div>
  );
};

export default Profile;
