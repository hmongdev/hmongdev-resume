'use client';
import About from '@/components/shared/About';
import Contact from '@/components/shared/Contact';
import Experience from '@/components/shared/Experience';
import Portfolio from '@/components/shared/Portfolio';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const DynamicPage = () => {
	const url = usePathname();
	const router = useRouter();

	useEffect(() => {
		if (url === '/') {
			router.push('/portfolio');
		}
	}, []);

	return (
		<div className="flex grow">
			{url === '/portfolio' ? <Portfolio /> : null}
			{url === '/experience' ? <Experience /> : null}
			{url === '/contact' ? <Contact /> : null}
			{url === '/about' ? <About /> : null}
		</div>
	);
};

export default DynamicPage;
