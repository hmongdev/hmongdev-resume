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
		text: 'Born into Relative Poverty, Family of 10',
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
				<h1 className="text-2xl">Family Background</h1>
				<p>
					For their entire lives, my immigrant
					parents worked low-income jobs and
					fought constantly about money. This is
					important because up until recently,
					I've always had a negative relationship
					with money.
				</p>
				<p>
					In a family of 10, I had a fairly
					difficult childhood which shaped my
					self-esteem, learning, and motivation.
				</p>
				<p>
					I was extremely depressed as a kid, and
					it took me a long time to heal trauma
					and believe that I'm more capable than
					the circumstances of my life.
				</p>
				<h1 className="text-2xl">Why Coding?</h1>
				<p>
					As a kid, I've always loved video games,
					and building virtual worlds. However, I
					never knew coding was something you
					could do professionally -- which sounds
					hard to believe, but that's how it was
					for me.
				</p>
				<p>
					It wasn't until after college, when I
					lived with a roommate who had just
					graduated with a Computer Science degree
					and she was telling me about her new
					Software Engineer job: working from
					home, sitting at her desk all day, and
					getting paid ALOT of money for it.
				</p>

				<p>
					Some days, she didn't even do work. She
					just took the day off and went for a
					walk!
				</p>

				<p>
					That entire concept just blew my mind,
					honestly.
				</p>

				<p>
					I got into coding because I want to make
					money, and the things I want in life
					cost money:
				</p>

				<p>1. Help my parents retire.</p>
				<p>2. Buy a house.</p>
				<p>3. Raise a family.</p>
				<p>4. Start a business.</p>
				<p>5. Become a philanthropist.</p>
			</section>
		</main>
	);
};

export default About;
