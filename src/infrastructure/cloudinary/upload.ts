// src/infrastructure/cloudinary/upload.ts
import { cloudinary } from "./config";

export function uploadToCloudinary(
    buffer: Buffer,
    folder: string
): Promise<{ secure_url: string }> {
    return new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload_stream({ folder }, (error, result) => {
                if (error || !result) return reject(error);
                resolve(result as any);
            })
            .end(buffer);
    });
}
