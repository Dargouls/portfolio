import Convencing from '@/components/convencing/convencing';
import DownPage from '@/components/downPage/downPage';
import Presentation from '@/components/presentation/presentation';
import Projects from '@/components/projects/projects';
import Technologies from '@/components/technologies/technologies';

export default function Home() {
	return (
		<div className='relative'>
			<Presentation />
			<Convencing />
			<Projects className='mt-8' />
			<Technologies />
			<DownPage />
		</div>
	);
}
