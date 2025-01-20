import { useMemo } from 'react';

const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/drsvdv8rb/image/upload/';

// hook to generate cloudinary Url
const useCloudinaryImageUrl = (imagePath) => {
  return useMemo(() => {
    if (!imagePath) return '';
    
    // strip out 'image/upload/',  to get the image public id
    const publicId = imagePath.replace('image/upload/', '');
    
    return `${CLOUDINARY_BASE_URL}${publicId}`;
  }, [imagePath]);
};

export default useCloudinaryImageUrl;