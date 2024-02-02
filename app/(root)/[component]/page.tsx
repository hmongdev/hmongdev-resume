'use client';

import { usePathname } from 'next/navigation';

type HomeProps = {
	pathName: string;
};

const Home = ({ pathName }: HomeProps) => {
	const path = usePathname();

	return (
		<main className="flex justify-center items-center h-full">
			{/* {selectedLink === Router.path ? (
				selectedComponent
			) : (
				<Portfolio />
			)} */}
			<p>{`This is the pathName: ` + path}</p>
		</main>
	);
};

export default Home;
