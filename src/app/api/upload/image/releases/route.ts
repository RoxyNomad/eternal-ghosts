import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append('file', file);
    cloudinaryFormData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET || 'unsigned_preset');
    cloudinaryFormData.append('folder', 'releases');

    const cloudRes = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: cloudinaryFormData,
      }
    );

    const cloudData = await cloudRes.json();

    if (!cloudRes.ok) {
      console.error('Cloudinary API Error:', cloudData);
      return NextResponse.json(
        { error: cloudData.error?.message || 'Cloudinary upload failed' },
        { status: cloudRes.status }
      );
    }

    return NextResponse.json({
      url: cloudData.secure_url,
      public_id: cloudData.public_id,
    });
  } catch (error) {
    console.error('Server Image Upload Error:', error);
    return NextResponse.json({ error: 'Internal server error during image upload' }, { status: 500 });
  }
}