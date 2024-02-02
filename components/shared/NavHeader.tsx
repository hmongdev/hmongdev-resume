import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Github } from 'lucide-react';

import Image from 'next/image';
import { ModeToggle } from '../theme/ModeToggle';
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
					<Image
						alt="profile-photo"
						width={40}
						height={40}
						className="rounded-full"
						src="/assets/images/hmongdev_profile.png"
					/>
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
						</NavigationMenuItem>
						<NavigationMenuItem>
							<ModeToggle />
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</section>
		</div>
	);
};

export default NavHeader;
