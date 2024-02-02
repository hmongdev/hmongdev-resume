'use client';

import NavHeader from '@/components/shared/NavHeader';
import Sidebar from '@/components/shared/Sidebar';

import Footer from '@/components/shared/Footer';
import { usePathname } from 'next/navigation';
import '../../app/globals.css';
import DynamicPage from './[page]/page';

type LayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
	const path = usePathname();

	return (
		<div className="flex flex-col h-dvh w-svw">
			<NavHeader />
			<div className="flex justify-between h-full">
				<Sidebar />
				<div className="flex flex-col w-svw">
					<DynamicPage />
					<Footer />
				</div>
			</div>
		</div>
	);
}
