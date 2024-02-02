'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';

export function SearchBar() {
	const handleSearch = () => {
		alert('Not done yet!');
	};

	return (
		<div className="flex justify-center items-center gap-2">
			<Input type="text" placeholder="Search My Tech Stack" />
			<Button variant="secondary" onClick={handleSearch}>
				<Search />
			</Button>
		</div>
	);
}
