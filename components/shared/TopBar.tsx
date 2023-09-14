import React from 'react';

import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Link from 'next/link';
import Image from 'next/image';

export default function TopBar() {
	return (
		<nav className="w-full flex items-center justify-between fixed top-0 px-6 py-2 border-b border-neutral-900 bg-neutral-950 shadow-md z-30">
			<Link href="/" className="flex items-center gap-4">
				<Image
					src="/assets/images/logo-icon-pb.png"
					alt="logo"
					width={36}
					height={36}
				/>
				<h1 className="font-extralight text-[1.3rem] text-neutral-50 tracking-wide max-sm:hidden">
					Threadr
				</h1>
			</Link>
			<div className="flex items-center gap-1">
				<div className="block md:hidden">
					<SignedIn>
						<SignOutButton>
							<div className="flex cursor-pointer">
								<Image
									src="/assets/icons/logout.svg"
									alt="logout"
									width={24}
									height={24}
								/>
							</div>
						</SignOutButton>
					</SignedIn>
				</div>
				<OrganizationSwitcher
					appearance={{
						baseTheme: dark,
						elements: {
							organizationSwitcherTrigger: 'py-2 px-2',
						},
					}}
				/>
			</div>
		</nav>
	);
}
