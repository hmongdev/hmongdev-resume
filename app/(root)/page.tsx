'use client';

type HomeProps = {
	linkName: string;
};

const Home = ({ linkName }: HomeProps) => {
	return (
		<main className="flex justify-center items-center h-full">
			{/* {selectedLink === Router.path ? (
				selectedComponent
			) : (
				<Portfolio />
			)} */}
			<p>{`This is the linkname: ` + linkName}</p>
		</main>
	);
};

export default Home;
