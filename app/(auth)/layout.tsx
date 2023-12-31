import { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import '@/app/globals.css';

import { Inter } from 'next/font/google';

export const metadata: Metadata = {
	title: 'Threadr | Where Thoughts Unfold!',
	description:
		'Share, converse, and connect with the world through seamless threaded conversations. Make your ideas heard in a space designed for in-depth discussions.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${inter.className} bg-dark-1`}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
