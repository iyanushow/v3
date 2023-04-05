import React from 'react';
import styled from 'styled-components';

/* -------------------------- SkipToMain PropTypes -------------------------- */

const SkipToMain = ({ content = '0' }: { content: string }) => {
	return (
		<Wrapper>
			<a className="skip-main animated fadeIn" href={`#${content}`} aria-label="Skip navigation and go to main content">
				Skip to main content
			</a>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	a.skip-main {
		left: -999px;
		position: fixed;
		top: auto;
		width: 1px;
		height: 1px;
		overflow: hidden;
		z-index: -999;
	}
	a.skip-main:focus,
	a.skip-main:active {
		color: var(--bg);
		background-color: var(--shady);
		left: auto;
		top: auto;
		width: auto;
		height: auto;
		overflow: auto;

		padding: 10px 14px;
		border-radius: 1px 1px 5px 6px;
		border: 1px solid #5d68ca;
		text-align: center;
		font-size: 1.2em;
		font-weight: 500;
		font-size: var(--font-sm);
		z-index: 9999999;
	}
`;

export default React.memo(SkipToMain);
