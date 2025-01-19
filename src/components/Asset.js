import React from "react";
import { ProgressBar } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

const Asset = ({ loading, progress, src, message }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {loading && (
        <ProgressBar animated now={progress || 50} label={`${progress || 50}%`} />
      )}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;