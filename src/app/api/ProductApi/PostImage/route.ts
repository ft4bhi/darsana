// src/app/api/PostImage/route.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { storage } from '@/lib/firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '@/db';
import { v4 as uuidv4 } from 'uuid';
import { files } from '@/db/schema/product/Image';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const filesData = req.body.files;

        if (!filesData || filesData.length === 0) {
            return res.status(400).json({ message: 'No files provided' });
        }

        const fileMetadata = [];

        for (const file of filesData) {
            const fileBuffer = Buffer.from(file.data, 'base64');
            const fileExtension = file.name.split('.').pop();
            const uniqueFileName = `${uuidv4()}.${fileExtension}`;
            const storageRef = ref(storage, `uploads/${uniqueFileName}`);

            const uploadResult = await uploadBytes(storageRef, fileBuffer, {
                contentType: file.type,
            });

            const fileURL = await getDownloadURL(uploadResult.ref);

            const metadata = {
                id: uuidv4(),
                fileName: file.name,
                fileType: file.type,
                fileSize: file.size,
                fileURL,
                uploadDate: new Date(),
            };

            await db.insert(files).values(metadata);

            fileMetadata.push(metadata);
        }

        return res.status(200).json({ message: 'Files uploaded successfully', fileMetadata });
    } catch (error) {
        console.error('File upload error:', error);
        return res.status(500).json({ message: 'Failed to upload files', error });
    }
}
