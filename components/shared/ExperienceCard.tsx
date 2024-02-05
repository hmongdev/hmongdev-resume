import { jobHistory } from '@/constants';

const ExperienceCard = () => {
	return (
		<div className="w-full p-2">
			{jobHistory.map((job) => {
				return (
					<div className="flex flex-col justify-between gap-3 my-5 bg-zinc-900 rounded-lg border-2 border-zinc-700">
						<div className="flex justify-between">
							<h3 className="text-xl p-2">
								{job.company}
							</h3>
							<h1 className="text-lg p-2">
								{job.years}
							</h1>
						</div>
						<div className="flex justify-between items-center p-2 bg-zinc-800 rounded-b">
							<em className="text-md">
								{job.position}
							</em>
							<h1 className="text-sm text-wrap p-2">
								{job.location}
							</h1>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ExperienceCard;
