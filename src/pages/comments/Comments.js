import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileImage from "../../components/ProfileImage";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
    const { profile_id, profile_picture, owner, created_at, content } = props;

    return (
        <div>
            <Media>
                <Link to={`/profiles/${profile_id}`}>
                    <ProfileImage src={profile_picture} height={40} className={styles.profileImage} />
                    
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{created_at}</span>
                    <p>{content}</p>
                </Media.Body>
            </Media>
        </div>
    );
};

export default Comment;
