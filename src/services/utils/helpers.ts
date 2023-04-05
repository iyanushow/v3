/**
 * Gives you the ability to get random items from an array
 *
 * (e.g): arrayRandomItem([2,3,4,5]) // Returns 4
 * arrayRandomItem([2,3,4,'5']) // Returns '5'
 *
 * @template T
 * @param {Array} array - The array passed into the function
 * @returns {T} Returns a random item from the initial array
 */
export const arrayRandomItem = <T>(array: Array<T>): T => {
	return array[(Math.random() * array.length) | 0];
};

/**
 * Gives you the ability to randomly pick an item from an array
 * or specify from what index you want the item to be picked from.
 *
 * @template T
 * @param {Array} array - The array passed into the function
 * @param {Number} index - determines if you want to function to pick that index
 * @returns {T} Returns a random item from the initial array
 */
export const arrayPickOne = <T>(array: Array<T>, index: number): T => {
	return array.splice(index >= 0 ? index : (Math.random() * array.length) | 0, 1)[0];
};
