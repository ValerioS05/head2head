import { useEffect, useState } from "react";
import axios from "axios";

const useUserProfile = (profileId) => {
  const [isStaff, setIsStaff] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      if (profileId) {
        try {
          setLoading(true);
          const { data } = await axios.get(`/profiles/${profileId}/`);
          setIsStaff(data.is_staff);
        } catch (err) {
          setError(err);
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    };

    if (profileId) {
      loadProfile();
    } else {
      setLoading(false);
    }
  }, [profileId]);

  return { isStaff, loading, error };
};

export default useUserProfile;
