const SITE = require('./src/config.js').SITE;

/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,

	trailingSlash: SITE.trailingSlash,
	basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',

	poweredByHeader: false,
	images: {
		unoptimized: true,
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
		imageSizes: [16, 24, 32, 48, 64, 96, 128],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'source.unsplash.com',
			},
		],
	},
	experimental: { optimizePackageImports: ['@tabler/icons-react'] }
};
