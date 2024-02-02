'use client';

import Portfolio from '@/components/shared/Portfolio';
import { usePathname } from 'next/navigation';

type HomeProps = {
	pathName: string;
};

const Home = ({ pathName }: HomeProps) => {
	const path = usePathname();

	return (
		<main className="flex justify-center items-center h-full">
			{path === path && <Portfolio />}
		</main>
	);
};

export default Home;
