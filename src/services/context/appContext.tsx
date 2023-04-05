import { clearState, saveState } from '@storage/index';
import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

export enum Theme {
	light,
	dark,
}

type IAppContext = {
	show: boolean;
	theme: Theme;
	loadTheme: (theme: Theme) => void;
	setTheme: () => void;
	handleOpen: () => void;
	closeShow: () => void;
};

const defaultState = {
	show: false,
	theme: Theme.dark,
	loadTheme: (theme: Theme) => void 0,
	setTheme: () => void 0,
	handleOpen: () => void 0,
	closeShow: () => void 0,
};

const AppContext = createContext<IAppContext>(defaultState);

/*
 * PROVIDER
 */

const loadTheme = async (theme: Theme) => {
	if (theme === Theme.dark) {
		clearState();
	} else {
		saveState(Theme.light);
	}
};

export const AppProvider = (props: { children: ReactNode }) => {
	const [show, setShow] = useState(false);
	const [theme, setTheme] = useState(Theme.dark);

	return (
		<AppContext.Provider
			value={{
				show,
				theme,
				loadTheme,
				setTheme: () => setTheme((prevTheme) => (prevTheme === Theme.dark ? Theme.light : Theme.dark)),
				closeShow: () => setShow(false),
				handleOpen: () => setShow((show) => !show),
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

/*
 * HOOK
 */
export const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error("Missing AppProvider. You can't use the hook, without the provider.");
	}
	return context;
};

export default AppContext;
