'use client';
import Link from 'next/link';
import { useState } from 'react';

const routes = [
	{
		name: 'Portfolio',
	},
	{
		name: 'Education',
	},
	{
		name: 'Contact',
	},
	{
		name: 'About',
	},
];

const Sidebar = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="flex flex-col gap-2 justify-start min-w-[200px] p-2 border-r-[1px] border-zinc-800 z-20 sticky">
			{routes.map((route) => (
				<Link
					href={`/${route.name.toLowerCase()}`}
					className="w-full border-none px-2 py-3 rounded-lg hover:bg-zinc-800 focus:bg-zinc-500">
					<p className="text-start">
						{route.name}
					</p>
				</Link>
			))}
		</div>
	);
};

export default Sidebar;
