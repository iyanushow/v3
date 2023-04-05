import Link from '@components/ActiveLink';
import { Icon, Logo, Moon } from '@components/Icons';
import { Header } from '@components/Layout/style';
import { Theme, useAppContext } from '@context/appContext';
import React from 'react';

const Navbar = () => {
	const { show, handleOpen, setTheme, closeShow, theme } = useAppContext();
	return (
		<>
			<Header>
				<nav className="navbar navbar-expand-lg bg-light navbar-light">
					<div className="container">
						<Link
							href="/"
							className="navbar-brand"
							aria-label="Iyanuoluwa Sowande Home"
							tabIndex={show ? -1 : undefined}
						>
							<Logo />
						</Link>

						<button
							className="navbar-toggler pr-0"
							type="button"
							onClick={handleOpen}
							tabIndex={show ? -1 : undefined}
							aria-label="Open Button Toggle"
						>
							<span className="navbar-toggler-icon" />
						</button>

						<div className={`collapse navbar-collapse  ${show && 'show'}`} id="collapsibleNavbar">
							<button className="d-block d-md-none close-nav" onClick={handleOpen}>
								<Icon />
							</button>

							<ul className="navbar-nav ml-auto">
								<li className="nav-item hover__bottom d-block d-md-none">
									<Link
										href="/"
										activeClassName="is-active"
										className="nav-link"
										onClick={closeShow}
										aria-label="Go Home"
									>
										Home
									</Link>
								</li>
								<li className="nav-item hover__bottom">
									<Link
										href="/about"
										activeClassName="is-active"
										className="nav-link"
										onClick={closeShow}
										aria-label="Go To About Page"
									>
										About
									</Link>
								</li>
								<li className="nav-item hover__bottom">
									<Link
										href="/projects"
										activeClassName="is-active"
										className="nav-link"
										onClick={closeShow}
										aria-label="Go To Projects Page"
									>
										Projects
									</Link>
								</li>
								<li className="nav-item hover__bottom">
									<Link
										href="/resume"
										activeClassName="is-active"
										className="nav-link"
										onClick={closeShow}
										aria-label="Go To Resume Page"
									>
										Resume
									</Link>
								</li>
								<li className="nav-item hover__bottom">
									<Link
										href="/contact"
										activeClassName="is-active"
										className="nav-link"
										onClick={closeShow}
										aria-label="Go To Contacts Page"
									>
										Contact
									</Link>
								</li>
								<li className="nav-item pl-md-3">
									<Link
										href=""
										className="nav-link nav-svg"
										aria-label={`Turn On ${theme === Theme.dark ? 'Light' : 'Dark'} Mood`}
										onClick={setTheme}
									>
										<Moon />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</Header>
		</>
	);
};

export default Navbar;
