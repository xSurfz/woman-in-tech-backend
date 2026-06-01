import { env } from "@/infrastructure/config/env.js";

import { S3StorageService } from "./S3StorageService.js";
import { CloudinaryStorageService } from "./CloudinaryStorageService .js";
import { LocalStorageService } from "./LocalStorageService.js";

export function createFileStorageService() {
  switch (env.STORAGE_PROVIDER) {
    case "s3":
      return new S3StorageService();

    case "cloudinary":
      return new CloudinaryStorageService();

    default:
      return new LocalStorageService();
  }
}
