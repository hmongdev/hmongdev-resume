const About = () => {
	return (
		<main className="flex flex-col justify-start items-center p-10">
			<section className="flex flex-col gap-5 border border-zinc-700 rounded-xl p-5 my-5">
				<h1 className="text-2xl font-semibold text-left text-yellow-500 capitalize">My story</h1>
				<ol className="flex flex-col gap-4">
					<li>I grew up in poverty to immigrant parents making less than $10/hour to support a family of 10.</li>
					<li>I am the first in my family to graduate high school, a 1st-generation, non-traditional college student, and 2nd-generation immigrant.</li>
					<li>There have been many obstacles in my life, and I’ve worked hard to overcome them.</li>
					<h1 className="text-2xl font-semibold text-left text-yellow-500 capitalize">My Education</h1>
					<li>
						I graduated from the University of Minnesota, Twin Cities in 2019 with a Bachelor of Arts Degree in Psychology. This was the beginning of COVID and I
						found myself exploring coding.
					</li>
					<li>
						In September 2022 – I graduated from the Full-Stack Software Engineering program at Prime Digital Academy where I learned HTML, CSS, JavaScript, jQuery,
						AJAX, React, Node, Express, Redux, and PostgreSQL.
					</li>
					<li>Since graduating, I’ve taught myself TypeScript, Next.js, MongoDB, Tailwind, and built several full-stack projects.</li>
					<h1 className="text-2xl font-semibold text-left text-yellow-500 capitalize">My Work Experience</h1>
					<li>
						In June 2024 – I landed my first job as a Front-End Software Engineer with the startup, Hydra. In this position, I was given a greenfield codebase and
						expected to build most features on the frontend.
					</li>
					<li>
						As a junior with no professional software engineering experience working in a startup environment, I relied heavily on resources outside of my immediate
						team for learning and guidance. These resources included ChatGPT, StackOverflow, Reactiflux Discord, and YouTube.
					</li>
					<li>
						As a result, I developed self-reliance, resourcefulness, and confidence in solving my own problems. This position also gave me an opportunity to learn
						new technologies like Docker and GraphQL while honing React, Typescript, Next.js, and Tailwind. I’m looking forward to utilizing these skills for future
						companies.
					</li>
					<li>Will I check off every box? Absolutely not.</li>
					<li>Am I motivated to solve problems, learn, and make an impact within a team? Yes.</li>
				</ol>
				<h1 className="text-2xl font-semibold text-left text-yellow-500 capitalize">My North Star</h1>
				<ol>
					<li>My motivation in life is simple. I want to obtain financial freedom, build a better life for myself and my family, and help others along the way.</li>
				</ol>
			</section>
		</main>
	);
};

export default About;
