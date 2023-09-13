import React from 'react';

export default function RightBar() {
	return (
		<section className="w-fit h-screen flex flex-col justify-between gap-12 sticky top-0 right-0 px-10 pt-24 pb-6 border-l border-l-neutral-900 bg-neutral-950 overflow-auto z-20 max-xl:hidden custom-scrollbar">
			<div className="flex flex-1 flex-col justify-start">
				<h3 className="font-light text-[1rem] text-neutral-50">
					Suggested Communities
				</h3>
			</div>
			<div className="flex flex-1 flex-col justify-start">
				<h3 className="font-light text-[1rem] text-neutral-50">
					Suggested Users
				</h3>
			</div>
		</section>
	);
}
