/**
 * Generates a random alphanumeric string ID.
 * @returns {string} A random string
 */
export function randomId() {
  return Math.random().toString(36).substring(2, 9);
}