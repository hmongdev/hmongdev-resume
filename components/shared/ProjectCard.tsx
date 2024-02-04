import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Presentation } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

interface ProjectCardProps {
	title: string;
	skills: string[];
	desc: string;
	imageUrl: string;
	githubUrl: string;
	deployUrl: string;
}

export function ProjectCard({
	title,
	imageUrl,
	githubUrl,
	deployUrl,
}: ProjectCardProps) {
	const handleRoute = (url: string) => {
		window.open(url, '_blank');
	};

	return (
		<Card className="group overflow-hidden w-[400px] h-fit text-center">
			<div className="flex flex-col justify-center items-center p-2 hover:bg-zinc-900">
				<Image
					alt="repoImage"
					className="rounded-xl m-2"
					width={370}
					height={100}
					src={imageUrl}
				/>
				<CardHeader className="w-full p-2">
					<CardTitle>{title}</CardTitle>
				</CardHeader>

				<CardFooter className="w-full">
					<div className="flex w-full justify-center items-center">
						<Button
							onClick={() =>
								handleRoute(
									githubUrl
								)
							}
							variant="outline">
							<Github />
						</Button>
						<Button
							onClick={() =>
								handleRoute(
									deployUrl
								)
							}
							variant="outline">
							<Presentation />
						</Button>
					</div>
				</CardFooter>
			</div>
		</Card>
	);
}
