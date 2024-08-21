'use client';

import Convencing from '@/components/convencing/convencing';
import DownPage from '@/components/downPage/downPage';
import Footer from '@/components/layout/footer/footer';
import Presentation from '@/components/presentation/presentation';
import Projects from '@/components/projects/projects';
import Technologies from '@/components/technologies/technologies';
import { Timeline } from '@/components/timeline/timeline';

export default function Home() {
	return (
		<>
			<Presentation />
			<Convencing />
			<Projects className='mb-94 mt-8' />
			<Technologies />
			<Timeline />
			<DownPage />
			<Footer />
		</>
	);
}
