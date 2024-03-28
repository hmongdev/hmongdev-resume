import Link from 'next/link';

const Home = () => {
	const handleRoute = (url: string) => {
		window.open(url, '_blank');
	};

	return (
		<main className="flex flex-col grow justify-start items-start p-10 gap-5">
			<h1 className="text-3xl font-bold">Current Projects</h1>
			<ul className="flex gap-5 flex-col text-xl">
				<Link
					target="_blank"
					href="https://grewlz.itch.io/mydoria-the-awakening"
					className="hover:underline">
					Mydoria: The Awakening
				</Link>
				<Link
					target="_blank"
					href="https://www.youtube.com/channel/UCmSwD62B9zauRE8H-6y9sOQ"
					className="hover:underline">
					YouTube Channel (AI + Game Development)
				</Link>
			</ul>
		</main>
	);
};

export default Home;
