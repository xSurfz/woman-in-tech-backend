import { FileStorageService } from "./FileStorageService.js";
import fs from "fs/promises";
import path from "path";

export class LocalStorageService implements FileStorageService {
  async upload(file: Express.Multer.File): Promise<string> {
    // 1. Validar que realmente llegue el archivo desde Multer
    if (!file || !file.originalname) {
      throw new Error("No file or file originalname provided");
    }

    // 2. Crear un nombre único usando el nombre original (¡NUNCA usar file.filename aquí!)
    const uniqueName = `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

    // 3. Ruta de la carpeta física en la raíz del proyecto backend
    const uploadDir = path.resolve("uploads");

    try {
      // 4. Aseguramos que la carpeta física exista
      await fs.mkdir(uploadDir, { recursive: true });

      // 5. Escribimos los bytes de la memoria (file.buffer) al disco duro
      const filePath = path.join(uploadDir, uniqueName);
      await fs.writeFile(filePath, file.buffer);

      // 6. Retornamos la URL limpia para guardar en la base de datos
      return `/uploads/${uniqueName}`;
    } catch (error) {
      console.error(
        "Error crítico guardando el archivo de forma local:",
        error,
      );
      throw new Error("Could not save file to local storage");
    }
  }
}
