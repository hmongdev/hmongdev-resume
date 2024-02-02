'use client';
import Link from 'next/link';

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

export default function Sidebar() {

	return (
		<nav className="flex flex-col gap-2 justify-start min-w-[200px] p-2 border-r-[1px] border-zinc-800 z-20 sticky">
			{routes.map((route) => (
				<Link
					key={route.name}
					href={`/${route.name.toLowerCase()}`}
					className="w-full border-none px-2 py-3 rounded-lg hover:bg-zinc-800 focus:bg-zinc-500">
					<p className="text-start">
						{route.name}
					</p>
				</Link>
			))}
		</nav>
	);
};