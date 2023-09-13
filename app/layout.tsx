import type { Metadata } from 'next';

import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Threadr | Where Thoughts Unfold!',
	description:
		'Share, converse, and connect with the world through seamless threaded conversations. Make your ideas heard in a space designed for in-depth discussions.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
