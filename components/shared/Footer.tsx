import Link from 'next/link';

const Footer = () => {
	return (
		<div className="flex justify-between items-center w-full p-2 border-t-[1px] border-zinc-700 absolute bottom-0 text-gray-500">
			<small>©️ 2024. Steve Yang. All rights reserved.</small>
			<div className="flex gap-3">
				<small>
					<Link href="/">Contact</Link>
				</small>
				<small>
					<Link href="/">Terms of Service</Link>
				</small>
				<small>
					<Link href="/">Privacy Policy</Link>
				</small>
			</div>
		</div>
	);
};

export default Footer;
