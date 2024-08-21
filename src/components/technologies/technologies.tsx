import Image from 'next/image';

import next from '@/assets/icons/logos_nextjs-light.png';
import react from '@/assets/icons/logos_react.png';
import typescript from '@/assets/icons/logos_typescript.png';

import node from '@/assets/icons/logos_node.png';
import postgres from '@/assets/icons/logos_postgresql.png';
import tailwind from '@/assets/icons/logos_tailwindcss.png';

export default function Technologies() {
	return (
		<>
			<section className='mt-40 flex flex-wrap justify-around bg-section-background p-4 md:px-4 md:py-14'>
				<h2>Principais tecnologias</h2>
				<div className='flex flex-col gap-11'>
					<ul className='flex flex-wrap gap-4 md:gap-16 lg:ml-28'>
						<li className='flex items-center gap-2'>
							<Image src={react} alt='react' width={56} />
							<span>ReactJs</span>
						</li>
						<li className='flex items-center gap-2'>
							<Image src={next} alt='react' width={56} />
							<span>NextJs</span>
						</li>
						<li className='flex items-center gap-2'>
							<Image src={typescript} alt='react' width={56} />
							<span>TypeScript</span>
						</li>
					</ul>

					<ul className='flex flex-wrap gap-4 md:gap-16 lg:ml-28'>
						<li className='flex items-center gap-2'>
							<Image src={tailwind} alt='react' width={56} />
							<span>Tailwindcss</span>
						</li>
						<li className='flex items-center gap-2'>
							<Image src={node} alt='react' width={56} />
							<span>Node</span>
						</li>
						<li className='flex items-center gap-2'>
							<Image src={postgres} alt='react' width={56} />
							<span>Postgres</span>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}
