// Util to validate image size to don't overwelm the server and cloudinary.
// Cloudinary has a 5 mega limit but for the size of this project i opted for a much smaller weight.
export const validateImage = (file) => {
  if (!file.type.startsWith("image/")) {
    return "Please upload a valid image.";
  }
  if (file.size > 1 * 1024 * 1024) {
    return "File size exceeds 1 MB. Please upload a smaller image.";
  }
  return null;
};
