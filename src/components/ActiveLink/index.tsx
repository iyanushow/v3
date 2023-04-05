import React from 'react';
import { withRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

type ActiveLinkProps = {
	router: any;
	children: any;
	activeClassName?: string;
	className?: string;
	href: string;
	tabIndex?: number;
} & LinkProps;

const ActiveLink = ({ router, children, activeClassName, href, className, ...props }: ActiveLinkProps) => {
	if (router.pathname === href && activeClassName) {
		className = `${className} ${activeClassName}`.trim();
	}

	return (
		<Link href={href} className={className} {...props}>
			{children}
		</Link>
	);
};

export default withRouter(ActiveLink);
