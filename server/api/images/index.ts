import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const manifestPath = join(process.cwd(), 'public/images/image-manifest.json');
    const raw = await readFile(manifestPath, 'utf-8');
    const manifest = JSON.parse(raw);

    return { images: manifest };
  } catch (err) {
    return sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Failed to load image manifest',
    }));
  }
});