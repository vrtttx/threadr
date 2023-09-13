'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants/data';

import Image from 'next/image';
import Link from 'next/link';

export default function BottomBar() {
	const pathname = usePathname();

	return (
		<section className="w-full fixed bottom-0 p-4 border-t border-t-neutral-900 rounded-t-3xl bg-glassmorphism z-10 backdrop-blur-lg xs:px-7 md:hidden">
			<div className="flex items-center justify-between gap-3 xs:gap-5">
				{sidebarLinks.map((link) => {
					const isActive =
						(pathname.includes(link.route) && link.route.length > 1) ||
						pathname === link.route;

					return (
						<Link
							key={link.label}
							href={link.route}
							className={`flex flex-col items-center gap-2 relative p-2 rounded-lg sm:flex-1 sm:px-2 sm:py-2 ${
								isActive && 'bg-violet-600'
							}`}
						>
							<Image
								src={link.imgUrl}
								alt={link.label}
								width={20}
								height={20}
							/>
							<p className="font-light text-[12px] text-neutral-50 max-sm:hidden">
								{link.label.split(/\s+./)[0]}
							</p>
						</Link>
					);
				})}
			</div>
		</section>
	);
}
