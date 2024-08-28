'use client';

import Sidebar from '@/components/shared/Sidebar';

import Footer from '@/components/shared/Footer';
import TopNavbar from '@/components/shared/TopNavbar';
import '../../app/globals.css';
import DynamicPage from './[page]/page';

type LayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col h-dvh w-svw">
			<TopNavbar />
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
