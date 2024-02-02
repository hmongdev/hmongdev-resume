'use client';

import Footer from '@/components/shared/Footer';
import NavHeader from '@/components/shared/NavHeader';
import Sidebar from '@/components/shared/Sidebar';

import '../../app/globals.css';

type LayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<div className="flex h-screen flex-col">
			<NavHeader />
			<div className="flex w-full h-full">
				<Sidebar />
				<main className="flex flex-col justify-between w-full">
					{children}
					<Footer />
				</main>
			</div>
		</div>
	);
}
