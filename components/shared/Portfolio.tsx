import { ScrollArea } from '@/components/ui/scroll-area';

const Portfolio = () => {
	return (
		<main className="flex grow justify-center items-center ">
			<ScrollArea className=" h-full p-4">
				<div className="grid-cols-4">
					{projects.map((project) => {
						return <Card />;
					})}
				</div>
			</ScrollArea>
		</main>
	);
};

export default Portfolio;
