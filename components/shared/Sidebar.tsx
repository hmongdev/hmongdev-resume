'use client';
import { routes } from '@/constants';
import { BookA, Folders, School, UserRoundSearch } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export const renderLink = (route: { name: string; icon: string }, currentPath: string) => {
	// Normalize route name for comparison and make sure it matches the current path.
	const isSameRoute = currentPath === `/${route.name.toLowerCase()}`;

	return (
		<Link key={route.name} href={`/${route.name.toLowerCase()}`} passHref className={`flex gap-5 w-full border-none p-5 rounded-lg focus:bg-zinc-700 ${isSameRoute && 'bg-stone-800'}`}>
			{getIcon(route.icon)}
			<p className="text-start">{route.name}</p>
		</Link>
	);
};

export default function Sidebar() {
	const currentPath = usePathname(); // Get the current path

	return (
		<nav className="hidden sm:flex flex-col gap-2 justify-start min-w-[300px] p-2 bg-black z-20 border-r border-r-zinc-700">
			{routes.map((route) => (
				<div key={route.name} className="flex justify-center items-center rounded hover:bg-zinc-900 hover:rounded-lg">
					{renderLink(route, currentPath)} {/* Pass the current path to renderLink */}
				</div>
			))}
		</nav>
	);
}
