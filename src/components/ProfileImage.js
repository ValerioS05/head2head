import React from "react";
import styles from "../styles/ProfileImage.module.css";
// profile image component
const ProfileImage = ({ src, height = 45, text = "Profile image" }) => {
  console.log("Profile image source:", src);
  return (
    <span>
      <img
        className={styles.ProfileImage}
        src={src}
        height={height}
        width={height}
        alt={text}
      />
    </span>
  );
};

export default ProfileImage;