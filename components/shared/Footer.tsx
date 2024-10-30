import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Footer = () => {
	return (
		<div className="flex justify-between items-center w-full p-2 border-t-[1px] border-zinc-700 text-gray-500 sm:text-sm max-sm:text-[12px]">
			<small>©️ 2024. Steve Yang. All rights reserved.</small>
			<div className="flex gap-3">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger className="flex gap-2 text-xs">
							<p>Contact</p>
							<p>Terms of Service</p>
							<p>Privacy Policy</p>
							<TooltipContent>
								<p>These links don't work! They're just for show :)</p>
							</TooltipContent>
						</TooltipTrigger>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	);
};

export default Footer;
