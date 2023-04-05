import Head from 'next/head';
import { ScoutBar } from 'scoutbar';
import React, { HTMLProps, ReactNode, useEffect } from 'react';

import Navbar from '../Navbar';
import Cursor from '../Cursor';
import SkipToMain from '../A11y/skip-to-main';
import { actions } from './data';
import { BackLay, BodyStyling, Main } from './style';
import { useAppContext } from '@context/appContext';

const Layout = ({ children, title = 'Home' }: { children: ReactNode; title?: string }) => {
	const { theme, loadTheme, show, setTheme } = useAppContext();

	useEffect(() => {
		loadTheme(theme);
	}, [loadTheme]);

	return (
		<Main>
			<BodyStyling pageTheme={theme} />
			<Head>
				<title>{`${title} | Iyanuoluwa Sowande | Shady Codes`}</title>
				<meta name="msapplication-TileColor" content={`${theme ? '#000000' : '#FFFFFF'}`} />
				<meta name="theme-color" content={`${theme ? '#000000' : '#FFFFFF'}`} />
			</Head>
			<SkipToMain content="main-content" />
			<Navbar />
			<BackLay title={title}>
				<h1 aria-hidden="true">{title === 'Home' ? 'Hello, There.' : title.concat('.')}</h1>
			</BackLay>
			<Cursor />
			<ScoutBar actions={actions(setTheme)} brandColor="var(--shady)" />
			{!show && <>{children}</>}
		</Main>
	);
};

export const PageWrapper = ({ children, className = '', ...rest }: HTMLProps<HTMLDivElement>) => {
	return (
		<section {...rest} id="main-content" tabIndex={-1}>
			<div className={`container  ${className}`}>
				<div className="row align-items-center justify-content-center">
					<div className="col-md-10">{children}</div>
				</div>
			</div>
		</section>
	);
};

export default Layout;
