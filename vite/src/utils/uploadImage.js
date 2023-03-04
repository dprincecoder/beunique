import cloudinary from "cloudinary-core";
// import process from "process";

const cloudinaryInstance = new cloudinary.Cloudinary({
  // cloud_name: process.env.cloudinary_name,
  // api_key: process.env.cloudinary_api_key,
  // api_secret: process.env.cloudinary_secret,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

const uploadImage = (image) => {
  // image => base64
  return new Promise((resolve, reject) => {
    cloudinaryInstance.uploader.upload(
      image,
      (error, result) => {
        if (result && result.secure_url) {
          console.log(result.secure_url);
          return resolve(result.secure_url);
        }
        console.log(error.message);
        return reject({ message: error.message });
      },
      opts
    );
  });
};

export default function uploadToCloudinary(image) {
  // imgage => base64
  return new Promise((resolve, reject) => {
    cloudinaryInstance.uploader.upload(
      image,
      (error, result) => {
        if (result && result.secure_url) {
          console.log(result.secure_url);
          return resolve(result.secure_url);
        }
        console.log(error.message);
        return reject({ message: error.message });
      },
      opts
    );
  });
}

export function uploadMultipleImages(images) {
  return new Promise((resolve, reject) => {
    const uploads = images.map((base) => uploadImage(base));
    Promise.all(uploads)
      .then((values) => resolve(values))
      .catch((err) => reject(err));
  });
}
