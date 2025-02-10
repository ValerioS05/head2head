import React from "react";
import styles from "../styles/ProfileImage.module.css";
// Profile image component
const ProfileImage = ({ src, height = 45, text = "Profile image" }) => {

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
