import React from 'react';
import { useParams } from 'react-router-dom';
import useUserProfile from '../../hooks/useUserProfile';
import styles from '../../styles/Profile.module.css';
import ProfileImage from '../../components/ProfileImage';

const Profile = () => {
  const { id } = useParams();
  const { isStaff, profilePicture, profileData, loading, error } = useUserProfile(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }


  if (!profileData) {
    return <div className={styles.error}>Profile not found.</div>;
  }


  const { owner, bio, location, isOwner, favourites } = profileData;

  return (
    <div>

      <div>
        <ProfileImage 
          src={profilePicture} 
          alt="Profile" 
        />
        <h1>{owner}'s Profile</h1>
      </div>


      <div >

        <div>
          <h3>Bio:</h3>
          <p>{bio}</p>
        </div>

        <div>
          <h3>Location:</h3>
          <p>{location}</p>
        </div>


        <div>
          <h3>Favourites:</h3>
          <p>{favourites && favourites.length > 0 ? 'My favourites.' : 'No favourites yet.'}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
