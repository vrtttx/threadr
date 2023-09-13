import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';

import TopBar from '@/components/shared/TopBar';
import LeftBar from '@/components/shared/LeftBar';
import RightBar from '@/components/shared/RightBar';
import BottomBar from '@/components/shared/BottomBar';

import '@/app/globals.css';

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
		<ClerkProvider>
			<html lang="en">
				<body className={`${inter.className} bg-dark-1`}>
					<TopBar />
					<main className="flex flex-row">
						<LeftBar />
						<section className="main-container">
							<div className="w-full max-w-4xl">{children}</div>
						</section>
						<RightBar />
					</main>
					<BottomBar />
				</body>
			</html>
		</ClerkProvider>
	);
}
