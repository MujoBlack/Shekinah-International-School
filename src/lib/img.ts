/** Path to a photo in public/images, respecting the deploy base path. */
export const img = (name: string) => `${__BASE_PATH__.replace(/\/$/, "")}/images/${name}.webp`;
