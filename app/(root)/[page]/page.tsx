import Education from '@/components/shared/Education';
import { usePathname } from 'next/navigation';

const DynamicPage = () => {
	const path = usePathname();

	return (
		<div className="flex grow bg-yellow-500">
			<Education />
		</div>
	);
};

export default DynamicPage;
