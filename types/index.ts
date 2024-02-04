export interface ProjectProps {
	project: {
		title: string;
		skills: string[];
		desc: string;
		imageUrl: string;
		githubUrl: string;
		deployUrl: string;
	};
}

export interface ProjectCardProps {
	title: string;
	skills: string[];
	desc: string;
	imageUrl: string;
	githubUrl: string;
	deployUrl: string;
}
