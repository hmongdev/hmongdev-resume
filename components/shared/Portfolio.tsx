import { projects } from '@/constants';
import { ProjectCard } from './ProjectCard';

const Portfolio = () => {
	return (
		<main className="flex grow justify-center items-start">
			<div
				className="grid 
					md:grid-cols-1
					lg:grid-cols-2
					xl:grid-cols-3
					gap-4 p-4 rounded-md">
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
