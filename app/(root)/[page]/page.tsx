'use client';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const DynamicPage = () => {
	const path = usePathname();

	const loadComponent = (page: string) => {
		switch (page) {
			case '/education':
				return dynamic(
					() =>
						import(
							'../../../components/shared/Education'
						)
				);
			case '/portfolio':
				return dynamic(
					() =>
						import(
							'../../../components/shared/Portfolio'
						)
				);
			case '/contact':
				return dynamic(
					() =>
						import(
							'../../../components/shared/Contact'
						)
				);
			case '/about':
				return dynamic(
					() =>
						import(
							'../../../components/shared/About'
						)
				);
			default:
				return null;
		}
	};

	const Component = loadComponent(path);

	return <div>{Component && <Component />}</div>;
};

export default DynamicPage;
