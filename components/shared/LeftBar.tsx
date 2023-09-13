'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { sidebarLinks } from '@/constants/data';

import Image from 'next/image';
import Link from 'next/link';
import { SignOutButton, SignedIn } from '@clerk/nextjs';

export default function LeftBar() {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<section className="w-fit h-screen flex flex-col justify-between sticky left-0 top-0 pt-24 pb-5 border-r border-r-neutral-900 bg-neutral-950 overflow-auto z-20 max-md:hidden custom-scrollbar">
			<div className="w-full flex flex-1 flex-col gap-4 px-6">
				{sidebarLinks.map((link) => {
					const isActive =
						(pathname.includes(link.route) && link.route.length > 1) ||
						pathname === link.route;

					return (
						<Link
							key={link.label}
							href={link.route}
							className={`flex justify-start gap-3 relative px-4 py-3 rounded-md transition hover:opacity-80 ${
								isActive && 'bg-violet-600'
							}`}
						>
							<Image
								src={link.imgUrl}
								alt={link.label}
								width={20}
								height={20}
							/>
							<p className="font-light text-[0.9rem] tracking-wide text-neutral-50 max-lg:hidden">
								{link.label}
							</p>
						</Link>
					);
				})}
			</div>
			<div className="px-6 mt-10">
				<SignedIn>
					<SignOutButton signOutCallback={() => router.push('/sign-in')}>
						<div className="flex gap-3 px-4 py-3 cursor-pointer transition hover:opacity-80">
							<Image
								src="/assets/icons/logout.svg"
								alt="logout"
								width={20}
								height={20}
							/>
							<p className="font-light text-[0.9rem] tracking-wide text-neutral-50 max-lg:hidden">
								Logout
							</p>
						</div>
					</SignOutButton>
				</SignedIn>
			</div>
		</section>
	);
}
