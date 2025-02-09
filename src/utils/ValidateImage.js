export const validateImage = (file) => {
    if (!file.type.startsWith("image/")) {
      return "Please upload a valid image.";
    }
    if (file.size > 1 * 1024 * 1024) {
      return "File size exceeds 1 MB. Please upload a smaller image.";
    }
    return null;
  };
