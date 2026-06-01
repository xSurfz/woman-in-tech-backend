import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export class S3StorageService {
  constructor(private s3 = new S3Client({ region: "us-east-1" })) {}

  async upload(file: Express.Multer.File): Promise<string> {
    const key = `${Date.now()}-${file.originalname}`;

    await this.s3.send(
      new PutObjectCommand({
        Bucket: process.env.S3_BUCKET!,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      }),
    );

    return `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${key}`;
  }
}
