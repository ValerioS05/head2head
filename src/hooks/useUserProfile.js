import { useEffect, useState } from "react";
import axios from "axios";

// Fetch profile id hook
const useUserProfile = (profileId) => {
  const [isStaff, setIsStaff] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadProfile = async () => {
      if (profileId) {
        try {
          setLoading(true);
          const { data } = await axios.get(`/profiles/${profileId}/`); // api request
          if (isMounted) {
            setIsStaff(data.is_staff);
            setProfilePicture(data.profile_picture);
          }
        } catch (err) {
          if (isMounted) {
            setError(err);
          }
        } finally {
          if (isMounted) {
            setLoading(false); // Sets loading to false once call is completed.
          }
        }
      }
    };

    if (profileId) {
      loadProfile();
    } else {
      setLoading(false);
    }
// Cleanup function
    return () => {
      isMounted = false;
    };
  }, [profileId]);

  return { isStaff, profilePicture, loading, error };
};

export default useUserProfile;

