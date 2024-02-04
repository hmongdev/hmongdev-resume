'use client';
import { BookA, Contact, Folders, School } from 'lucide-react';
import Link from 'next/link';

const routes = [
	{
		name: 'Portfolio',
		icon: 'folders',
	},
	{
		name: 'Education',
		icon: 'school',
	},
	{
		name: 'Contact',
		icon: 'contact',
	},
	{
		name: 'About',
		icon: 'bookA',
	},
];

const getIcon = (icon: string) => {
	switch (icon) {
		case 'folders':
			return <Folders />;
		case 'school':
			return <School />;
		case 'contact':
			return <Contact />;
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
		className="w-full border-none px-2 py-3 rounded-lg  focus:bg-zinc-500">
		<p className="text-start">{route.name}</p>
	</Link>
);

export default function Sidebar() {
	return (
		<nav className="flex flex-col gap-2 justify-start min-w-[300px] p-2 border-r-[1px] border-zinc-800 z-20">
			{routes.map((route) => (
				<div
					key={route.name}
					className="flex justify-center items-center p-2 rounded hover:bg-zinc-800">
					{getIcon(route.icon)}
					{renderLink(route)}
				</div>
			))}
		</nav>
	);
}