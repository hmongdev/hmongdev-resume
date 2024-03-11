import { Github, Linkedin, MailPlus, Youtube } from 'lucide-react';
import { Button } from '../ui/button';

export const contactButtons = [
	{
		name: 'github',
		url: 'https://github.com/hmongdev',
	},
	{
		name: 'linkedin',
		url: 'https://www.linkedin.com/in/steve-y-94397a220/',
	},
	{
		name: 'gmail',
		url: 'mailto:steveyangwork@gmail.com',
	},
	{
		name: 'youtube',
		url: 'https://www.youtube.com/watch?v=o59nBnUuMig&list=PLqZi44mRDJRlkh6JfAERimz8Bn2PGaAPe&ab_channel=HmongDev',
	},
];

const getIcon = (icon: string) => {
	switch (icon) {
		case 'github':
			return <Github size={50} />;
		case 'linkedin':
			return <Linkedin size={50} />;
		case 'gmail':
			return <MailPlus size={50} />;
		case 'youtube':
			return <Youtube size={50} />;
		default:
			return null;
	}
};

const Contact = () => {
	const handleRoute = (url: string) => {
		window.open(url, '_blank');
	};

	return (
		<main className="flex grow justify-center items-center p-5">
			{contactButtons.map((button) => {
				return (
					<Button
						variant="outline"
						className="bg-red-500 m-2 h-fit"
						onClick={() =>
							handleRoute(button.url)
						}>
						{getIcon(button.name)}
					</Button>
				);
			})}
		</main>
	);
};

export default Contact;
