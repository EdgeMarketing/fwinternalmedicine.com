import { readFile } from 'fs/promises'
import { join } from 'path'
export default defineEventHandler(async (event) => {
  const rawParam = event.context.params?.path;
  const pathSegments = Array.isArray(rawParam)
    ? rawParam
    : typeof rawParam === 'string'
      ? rawParam.split('/')
      : [];

  const requestedPath = pathSegments.join('/');

  try {
    const manifestPath = join(process.cwd(), 'public/images/image-manifest.json');
    const raw = await readFile(manifestPath, 'utf-8');
    const manifest = JSON.parse(raw);

    if (!manifest || typeof manifest !== 'object') {
      return sendError(event, createError({
        statusCode: 500,
        statusMessage: 'Invalid or missing image manifest',
      }));
    }

    if (pathSegments.length === 0) {
      return { images: manifest };
    }

    let current: unknown = manifest;

    for (const segment of pathSegments) {
      if (
        !current ||
        typeof current !== 'object' ||
        Array.isArray(current) ||
        !(segment in current)
      ) {
        return sendError(event, createError({
          statusCode: 404,
          statusMessage: `No images found at path: ${requestedPath}`,
        }));
      }

      current = (current as Record<string, unknown>)[segment];
    }

    return { images: current };
  } catch (err) {
    return sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Failed to load image manifest',
    }));
  }
});