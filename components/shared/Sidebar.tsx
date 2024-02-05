'use client';
import { routes } from '@/constants';
import { BookA, Folders, School, UserRoundSearch } from 'lucide-react';
import Link from 'next/link';

const getIcon = (icon: string) => {
	switch (icon) {
		case 'folders':
			return <Folders />;
		case 'school':
			return <School />;
		case 'contact':
			return <UserRoundSearch />;
		case 'bookA':
			return <BookA />;
		default:
			return null;
	}
};

const renderLink = (route: { name: string; icon: string }) => (
	<Link
		key={route.name}
		href={`/${route.name.toLowerCase()}`}
		passHref
		className="flex gap-5 w-full border-none p-5 rounded-lg focus:bg-zinc-700">
		{getIcon(route.icon)}
		<p className="text-start">{route.name}</p>
	</Link>
);

export default function Sidebar() {
	return (
		<nav className="hidden sm:flex flex-col gap-2 justify-start min-w-[300px] p-2 border-r-[1px] border-zinc-800 z-20">
			{routes.map((route) => (
				<div
					key={route.name}
					className="flex justify-center items-center rounded hover:bg-zinc-800">
					{renderLink(route)}
				</div>
			))}
		</nav>
	);
}