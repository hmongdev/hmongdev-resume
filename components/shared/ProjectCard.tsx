import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectCardProps } from '@/types';
import { Github, Presentation } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

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
		<Card className="w-fit h-fit text-center">
			<div className="flex flex-col gap-3 justify-center items-center p-2 hover:bg-zinc-900">
				<div className="flex items-center group overflow-hidden w-fit h-[200px]">
					<Image
						alt="repoImage"
						className="rounded-xl border border-zinc-900 duration-700 ease-in-out scale-100 blur-0 grayscale-0 object-cover"
						width={370}
						height={100}
						src={imageUrl}
					/>
				</div>
				<CardHeader className="w-full p-2">
					<CardTitle>{title}</CardTitle>
				</CardHeader>

				<CardFooter className="w-full">
					<div className="flex w-full justify-center items-center gap-3">
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
