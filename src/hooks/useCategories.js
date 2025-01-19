import { useState, useEffect } from "react";
import { axiosRes } from "../api/axiosDefaults";
// Custom hook to fetch categories from the api
const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// Hook to fetch categories when the compoennt mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosRes.get("/categories/"); // api request 
        setCategories(response.data.results); // Assuming the response has `results` field
      } catch (err) {
        setError("Failed to load categories");
      } finally {
        setLoading(false); // Sets loading to false once call is completed.
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategories;