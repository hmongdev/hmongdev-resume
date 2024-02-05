const ExperienceCard = () => {
	return (
		<div className="w-full border border-zinc-700 rounded-xl p-2">
			<div className="flex justify-between p-2 bg-zinc-900">
				<h1 className="text-2xl">{Company}</h1>
				<h1 className="text-2xl text-right">{Years}</h1>
			</div>
			<div className="flex justify-between p-2 bg-zinc-800">
				<h1 className="text-xl">{Position}</h1>
			</div>
		</div>
	);
};

export default ExperienceCard;
