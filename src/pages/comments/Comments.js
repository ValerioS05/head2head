import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileImage from "../../components/ProfileImage";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { EditMenu } from "../../components/EditMenu";

const Comment = (props) => {
  const { profile_id, profile_picture, owner, created_at, content } = props;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div className={styles.Comment}>
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <ProfileImage
            src={profile_picture}
            height={40}
            className={styles.profileImage}
          />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{created_at}</span>
          <p>{content}</p>
        </Media.Body>
        {is_owner && (
          <div className={styles.Edit}>
            <EditMenu handleEdit={() => {}} handleDelete={() => {}} />
          </div>
        )}
      </Media>
    </div>
  );
};

export default Comment;
