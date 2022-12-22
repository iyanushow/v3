/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.ctfassets.net', 'i.ytimg.com'],
	},
};

module.exports = module.exports = withPWA(nextConfig);
