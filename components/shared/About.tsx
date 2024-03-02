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
					parents, in a family of 10 wasn't easy.
				</p>
				<p>
					In the wise words of Randy Pausch from
					<em>
						{' '}
						<Link href="https://www.cmu.edu/randyslecture/book/index.html">
							<u>
								"The Last
								Lecture"
							</u>
						</Link>
					</em>
					, Professor Pausch said,{' '}
					<em>
						"We can't change the cards we're
						dealt, just how we play the
						hand."
					</em>
				</p>
				<p>
					It took me a long time to heal, and play
					the hand I was dealt.
				</p>
				<p>
					There are two main reasons why I got
					into coding:
				</p>
				<p>
					First, I've always loved art, video
					games, and computers. Unfortuantely, I
					was never exposed to coding until after
					I graduated college.
				</p>
				<p>
					Second, after working for over 30 years
					of their lives, my parents are only
					making $20/hour.
				</p>
				<p>
					I got into coding because I want to make
					a better life for myself, and help my
					parents retire.
				</p>
			</section>
		</main>
	);
};

export default About;
