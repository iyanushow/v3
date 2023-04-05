import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { IconRight, Twitter, Facebook, Linkedin, Github, Instagram, Dribble } from '../Icons';

import { SocialMedia } from '../Layout/style';

type FooterProps = {
	children: string;
	goto: string;
};

const FooterLink = ({ children, goto, ...rest }: FooterProps) => {
	return (
		<>
			<FooterStyle>
				<Link href={`${goto}`} aria-label={children}>
					<p {...rest}>
						{children}
						<IconRight />
					</p>
				</Link>
			</FooterStyle>
			<SocialMedia>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://twitter.com/shadycodes"
					aria-label="Go To Iyanuoluwa Sowande Twitter Page"
				>
					<Twitter />
				</a>

				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/iyanuoluwa-sowande-0522/"
					aria-label="Go To Iyanuoluwa Sowande Linkedin Page"
					title="Linkedin Page"
				>
					<Linkedin />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/iyanushow"
					aria-label="Go To Iyanuoluwa Sowande Github Page"
					title="Github Page"
				>
					<Github />
				</a>
			</SocialMedia>
		</>
	);
};

const FooterStyle = styled.footer`
	p {
		font-size: var(--font-sm);
		transition: all 1s ease;
		svg {
			margin-left: 1rem;
			animation-name: forward;
			animation-duration: 0.5s;
			animation-iteration-count: infinite;
			animation-direction: alternate;
		}
		&:hover {
			@keyframes forward {
				from {
					margin-left: 1rem;
				}
				to {
					margin-left: 2rem;
				}
			}
		}
	}
`;

export default FooterLink;
