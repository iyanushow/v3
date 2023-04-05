const Storage = {
	get: function (k: string) {
		try {
			const storedItem = localStorage.getItem(k);
			if (storedItem === null) {
				return null;
			}

			return JSON.parse(storedItem);
		} catch (e) {
			return null;
		}
	},
	set: function <T>(k: string, v: T) {
		console.log('about to set', k, v);
		localStorage.setItem(k, JSON.stringify(v));
	},
	remove: function (k: string) {
		localStorage.removeItem(k);
	},
};

export default Storage;

// State utility functions

const STATE = 'SHADYCODES';
export const loadState = () => Storage.get(STATE);

export const saveState = <T>(value: T) => Storage.set(STATE, value);

export const clearState = () => Storage.remove(STATE);
