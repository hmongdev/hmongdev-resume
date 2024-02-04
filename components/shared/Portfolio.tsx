import { projects } from '@/constants';
import { ProjectCard } from './ProjectCard';

const Portfolio = () => {
	return (
		<main className="grow">
			<div
				className="grid 
					sm:grid-cols-1
					md:grid-cols-2
					lg:grid-cols-3
					xl:grid-cols-4
					gap-4 bg-stone-900 p-4 rounded-md h-full">
				{projects.map(
					(project: {
						title: string;
						skills: string[];
						desc: string;
						imageUrl: string;
						githubUrl: string;
						deployUrl: string;
					}) => {
						return (
							<ProjectCard
								title={
									project.title
								}
								skills={
									project.skills
								}
								desc={
									project.desc
								}
								imageUrl={
									project.imageUrl
								}
								githubUrl={
									project.githubUrl
								}
								deployUrl={
									project.deployUrl
								}
							/>
						);
					}
				)}
			</div>
		</main>
	);
};

export default Portfolio;
