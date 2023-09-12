// By default nanoid generate an ID with 21 characters. To reduce the footprint, we default to 10 characters.
// We have a higher probability for collisions, though
/**
 * Generate a random ID. That ID can for example be used as a node ID.
 *
 * @param size The number of characters that are generated for the ID. Defaults to `10`
 * @returns A random id
 */
export const getRandomId = (size = 10) => {
    const timestamp = Date.now().toString(36);
    const randomChars = Math.random().toString(36).substring(2, 5);
    return `${timestamp}-${randomChars}`;
};
//# sourceMappingURL=getRandomId.js.map