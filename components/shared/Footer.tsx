const Footer = () => {
	return (
		<div className="flex justify-between items-center w-full p-2 border-t-[1px] border-zinc-700 text-gray-500 sm:text-sm max-sm:text-[12px]">
			<small>©️ 2024. Steve Yang. All rights reserved.</small>
			<div className="flex gap-3">
				<small>
					<p>Contact</p>
				</small>
				<small>
					<p>Terms of Service</p>
				</small>
				<small>
					<p>Privacy Policy</p>
				</small>
			</div>
		</div>
	);
};

export default Footer;
