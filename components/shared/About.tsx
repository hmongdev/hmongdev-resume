const aboutLinks = [
	{
		text: 'Hmong-American',
		href: 'https://www.hmongamericancenter.org/hmong-history/',
		icon: '🧑🏻‍🌾🇺🇸',
	},
	{
		text: '1st-Generation College Graduate',
		href: 'https://en.wikipedia.org/wiki/First-generation_college_students_in_the_United_States',
		icon: '👨🏻‍🎓',
	},
	{
		text: '2nd-Generation Immigrant',
		href: 'https://en.wikipedia.org/wiki/Second-generation_immigrants_in_the_United_States',
		icon: '🥈',
	},
	{
		text: 'Grew up in poverty',
		href: 'https://en.wikipedia.org/wiki/Poverty_threshold#Relative_poverty',
		icon: '👩🏻🧑🏻',
	},
];

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
					In the words of the late Carnegie Mellon
					University professor, Randy Pausch,
				</p>
				<p className="italic text-green-400">
					"We can't change the cards we're dealt,
					just how we play the hand."
				</p>
				<p>
					In short, my childhood was tough and I'm
					done grieving my past. Now, I'm playing
					the hand I was dealt.
				</p>
				<p className="italic text-green-400">
					I'm driven by the vision of a better
					life for myself, my family, and hope to
					start a successful business some day.
				</p>
			</section>
		</main>
	);
};

export default About;
