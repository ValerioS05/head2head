import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileImage from "../../components/ProfileImage";
import styles from "../../styles/Comment.module.css";
import CommentsEditForm from "./CommentsEditForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import { EditMenu } from "../../components/EditMenu";
import { axiosRes } from "../../api/axiosDefaults";
import useUserProfile from "../../hooks/useUserProfile";

const Comment = (props) => {
  const {
    profile_id,
    profile_picture,
    owner,
    created_at,
    content,
    id,
    setProduct,
    setComments,
    product_id,
  } = props;

  const currentUser = useCurrentUser();
  const { isStaff } = useUserProfile(currentUser?.profile_id);
  const is_owner = currentUser?.username === owner;
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setProduct((prevProduct) => ({
        results: [
          {
            ...prevProduct.results[0],
            comments_count: prevProduct.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

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
          {showEditForm ? (
            <CommentsEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_picture}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
              product_id={product_id}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {(is_owner || isStaff) && !showEditForm && (
          <div className={styles.Edit}>
            <EditMenu
              handleEdit={() => setShowEditForm(true)}
              handleDelete={handleDelete}
            />
          </div>
        )}
      </Media>
    </div>
  );
};

export default Comment;
