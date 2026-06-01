import { FileStorageService } from "./FileStorageService.js";
import { LocalStorageService } from "./LocalStorageService.js";
import { S3StorageService } from "./S3StorageService.js";
import { CloudinaryStorageService } from "./CloudinaryStorageService .js";

export class StorageFactory {
  /**
   * Crea e inicializa de manera dinámica la implementación de almacenamiento
   * basada en la variable de entorno STORAGE_DRIVER.
   */
  static create(): FileStorageService {
    // Leemos el driver del archivo .env (por defecto usamos 'local')
    const driver = process.env.STORAGE_DRIVER || "local";

    switch (driver.toLowerCase()) {
      case "s3":
        return new S3StorageService();

      case "cloudinary":
        return new CloudinaryStorageService();

      case "local":
      default:
        return new LocalStorageService();
    }
  }
}
