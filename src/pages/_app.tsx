import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppProvider } from '../services/context/appContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<Component {...pageProps} />
		</AppProvider>
	);
}
