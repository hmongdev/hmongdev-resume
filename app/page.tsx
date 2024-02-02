'use client';

import Dashboard from '@/components/shared/Dashboard';
import Footer from '@/components/shared/Footer';
import NavHeader from '@/components/shared/NavHeader';
import Sidebar from '@/components/shared/Sidebar';

const Home = () => {
	return (
		<div className="flex flex-col h-dvh w-dvw">
			<NavHeader />
			<div className="flex w-full h-full">
				<Sidebar />
				<div className="flex flex-col justify-between w-full">
					<Dashboard />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Home;
