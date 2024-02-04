import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Github } from 'lucide-react';

import Link from 'next/link';
import { Button } from '../ui/button';
import { SearchBar } from './SearchBar';

const NavHeader = () => {
	const handleRoute = () => {
		window.open(
			'https://github.com/hmongdev?tab=repositories',
			'_blank'
		);
	};

	return (
		<div className="flex justify-between items-center w-full p-2 border-b-[1px] border-zinc-700">
			<section className="flex min-w-[150px] justify-around items-center">
				<div className="flex justify-center">
					<Link href="/">
						<Avatar>
							<AvatarImage
								alt="profile-photo"
								width={40}
								height={40}
								src="/assets/images/hmongdev_profile.png"
							/>
							<AvatarFallback>
								SY
							</AvatarFallback>
						</Avatar>
					</Link>
				</div>
				<div className="flex-col">
					<h1>Steve Yang</h1>
					<em className="text-gray-500">
						Jr. Developer
					</em>
				</div>
			</section>

			<section>
				<SearchBar />
			</section>

			<section>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										<Button
											variant="outline"
											size="icon"
											onClick={
												handleRoute
											}>
											<Github
												size={
													25
												}
											/>
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>
											Github
											Repos
										</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</section>
		</div>
	);
};

export default NavHeader;
