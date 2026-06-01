import cloudinary from "cloudinary";
import { FileStorageService } from "./FileStorageService.js";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export class CloudinaryStorageService implements FileStorageService {
  async upload(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader
        .upload_stream(
          {
            folder: "events",
          },
          (err, result) => {
            if (err || !result) return reject(err);
            resolve(result.secure_url);
          },
        )
        .end(file.buffer);
    });
  }
}
