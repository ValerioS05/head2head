import { useState, useEffect } from "react";
import { axiosRes } from "../api/axiosDefaults";

// Custom hook to fetch categories from the api
const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// Hook to fetch categories when the compoennt mounts
  useEffect(() => {
    let isMounted = true; // Check if component is still mounted

    const fetchCategories = async () => {
      try {
        const response = await axiosRes.get("/categories/"); // api request 
        if (isMounted) {
          setCategories(response.data.results);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load categories");
        }
      } finally {
        if (isMounted) {
          setLoading(false); // Sets loading to false once call is completed.
        }
      }
    };

    fetchCategories();

    // "Cleanup function" to check state updates on unmounted component
    return () => {
      isMounted = false;
    };
  }, []);

  return { categories, loading, error };
};

export default useCategories;
