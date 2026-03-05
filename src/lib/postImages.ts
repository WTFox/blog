/**
 * Resolves a post image via webpack require.
 * Centralizes the content directory path so it's defined in one place.
 */
export function getPostImage(slug: string, filename: string) {
  return require(`../../content/${slug}/${filename}`).default
}
