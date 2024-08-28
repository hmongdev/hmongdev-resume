'use client';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Github, Menu } from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

const TopNavbar = () => {
	const path = usePathname();

	function formatRoute(route: string) {
		return route && route.length > 0 ? route.slice(1, 2).toUpperCase() + route.slice(2) : route;
	}

	const handleRoute = () => {
		window.open('https://github.com/hmongdev?tab=repositories', '_blank');
	};

	return (
		<div className="flex justify-between items-center w-full p-2 border-b-[1px] bg-black border-zinc-700">
			<section className="flex min-fit gap-3 justify-around items-center">
				<div className="flex justify-center">
					<Link href="/portfolio">
						<Avatar>
							<AvatarImage alt="profile-photo" width={40} height={40} src="/assets/images/hmongdev_profile.png" />
							<AvatarFallback>SY</AvatarFallback>
						</Avatar>
					</Link>
				</div>
				<div className="hidden md:flex md:flex-col">
					<Link href="/">
						<em className="text-gray-500">Jr. Developer</em>
						<h1>Steve Yang</h1>
					</Link>
				</div>
			</section>

			<section>
				{/* <SearchBar /> */}
				<div className="md:hidden">{<h1>{formatRoute(path)}</h1>}</div>
			</section>

			<section>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem className="md:hidden">
							<DropdownMenu>
								<DropdownMenuTrigger>
									<Button variant="outline" size="icon">
										<Menu />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>
										<Link href="/portfolio">Portfolio</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Link href="/experience">Experience</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Link href="/contact">Contact</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Link href="/about">About</Link>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										<Button variant="outline" size="icon" onClick={handleRoute}>
											<Github size={25} />
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>Github Repos</p>
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

export default TopNavbar;
