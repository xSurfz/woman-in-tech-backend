export interface FileStorageService {
  upload(file: Express.Multer.File): Promise<string>;
  delete?(url: string): Promise<void>;
}
