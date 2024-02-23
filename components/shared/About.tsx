import Link from 'next/link';

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
		<main className="flex flex-col grow justify-start items-center p-10">
			<ul className="flex-col gap-5">
				{aboutLinks.map((link) => {
					return (
						<li className="hover:underline py-3">
							<Link
								href={link.href}
								target="_blank"
								rel="noopener noreferrer">
								{link.icon +
									' ' +
									link.text}
							</Link>
						</li>
					);
				})}
			</ul>

			<section className="flex flex-col gap-5 border border-zinc-700 rounded-xl p-5 my-5">
				<h1 className="text-2xl text-center">
					Why Coding?
				</h1>
				<p>
					Growing up in poverty with immigrant
					parents, in a family of 10, is one of
					the most humbling experiences I've had.
				</p>
				<p>
					Life wasn't easy for me, and I refuse to
					let obstacles define my life.
				</p>
				<p>
					I got into coding because I want to make
					a better life for myself.
				</p>

				<p>I want to help my parents retire.</p>
				<p>I want to buy a house.</p>
				<p>I want to raise a family.</p>
				<p>I want to start a business.</p>
				<p>I want to become a philanthropist.</p>
			</section>
		</main>
	);
};

export default About;
