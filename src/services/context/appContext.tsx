import { clearState, saveState } from '@storage/index';
import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

type IAppContext = {
	show: boolean;
	theme: boolean;
	loadTheme: () => void;
	setTheme: () => void;
	handleOpen: () => void;
	closeShow: () => void;
};

const defaultState = {
	show: false,
	theme: false,
	loadTheme: () => void 0,
	setTheme: () => void 0,
	handleOpen: () => void 0,
	closeShow: () => void 0,
};
const AppContext = createContext<IAppContext>(defaultState);

/*
 * PROVIDER
 */
export const AppProvider = (props: { children: ReactNode }) => {
	const [show, setShow] = useState(false);
	const [theme, setTheme] = useState(false);

	const loadTheme = useCallback(async () => {
		if (!theme) {
			clearState();
		} else {
			saveState(1);
		}
	}, []);

	return (
		<AppContext.Provider
			value={{
				show,
				theme,
				loadTheme,
				setTheme: () => setTheme((prevTheme) => !prevTheme),
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
