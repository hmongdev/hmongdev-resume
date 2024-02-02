'use client';

import NavHeader from '@/components/shared/NavHeader';
import Sidebar from '@/components/shared/Sidebar';

import Footer from '@/components/shared/Footer';
import '../../app/globals.css';
import DynamicPage from './[page]/page';

type LayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col h-dvh">
			<NavHeader />
			<div className="flex w-full h-full">
				<Sidebar />
				<main className="flex flex-col justify-between w-full">
					<DynamicPage />
					<Footer />
				</main>
			</div>
		</div>
	);
}
