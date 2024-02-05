'use client';
import About from '@/components/shared/About';
import Contact from '@/components/shared/Contact';
import Experience from '@/components/shared/Experience';
import Portfolio from '@/components/shared/Portfolio';
import { usePathname } from 'next/navigation';

const DynamicPage = () => {
	const path = usePathname();

	return (
		<div className="flex grow">
			{path === '/portfolio' ? <Portfolio /> : null}
			{path === '/experience' ? <Experience /> : null}
			{path === '/contact' ? <Contact /> : null}
			{path === '/about' ? <About /> : null}
		</div>
	);
};

export default DynamicPage;
