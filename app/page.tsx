'use client';

import Dashboard from '@/components/shared/Dashboard';
import Footer from '@/components/shared/Footer';
import NavHeader from '@/components/shared/NavHeader';
import Sidebar from '@/components/shared/Sidebar';

const Home = () => {
	return (
		<div className="flex-col">
			<NavHeader />
			<div className="flex">
				<Sidebar />
				<Dashboard />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
