import { ProjectCard } from './ProjectCard';

const projects = [
	{
		title: 'meetcute',
		skills: ['JavaScript', 'Next.js', 'React', 'TypeScript'],
		desc: 'In this project, I expanded on my previous full stack app (Threads Clones) by creating a mobile-responsive, full stack prototype of my dating app, meetcute. In my last project, I experimented with MongoDB, and in this project I used Appwrite, a self-hosted backend, that increased security, allowed easy creation of a database, and reduced deployment times. I was able to fininish this project in a week. Similar to my Threads Clone, the app features include creating, liking, saving, and searching posts increasing user engagement. As mentioned, this is a prototype and template for my next project, meetcute v2.0, which will be mobile-responsive, available on iOS and Android, and utilize Postgres as its database.',
		imageUrl: '/assets/images/meetcute.png',
		githubUrl: 'https://github.com/hmongdev/meetcute-v1.0',
		deployUrl: 'https://meetcute-v1.vercel.app/',
	},
];

interface ProjectProps {
	project: {
		title: string;
		skills: string[];
		desc: string;
		imageUrl: string;
		githubUrl: string;
		deployUrl: string;
	};
}

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
