const About = () => {
	return (
		<main className="flex flex-col justify-start items-center p-10">
			<section className="flex flex-col gap-5 border border-zinc-700 rounded-xl p-5 my-5">
				<h1 className="text-2xl font-semibold text-left text-yellow-500">
					Why Coding?
				</h1>
				<ol className="flex flex-col gap-4">
					<li>
						1. I've always loved art,
						solving puzzles, playing video
						games, and tinkering with
						computers.
					</li>
					<li>
						Unfortunately, I never knew
						coding was something you could
						do professionally until
						recently!
					</li>
					<li>
						2. I want to help my parents
						retire. After working their
						entire lives, they only make
						$20/hour.
					</li>
				</ol>
				<h1 className="text-2xl font-semibold text-left text-yellow-500">
					What Drives Me?
				</h1>
				<p>
					I grew up in poverty to Vietnam War
					refugees who spoke little English, had
					no educational background, in a family
					of 10.
				</p>
				<p>
					I'm looking to make a better life for
					myself and my family.
				</p>
			</section>
		</main>
	);
};

export default About;
