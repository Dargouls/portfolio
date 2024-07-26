'use client';
import Lottie from 'react-lottie-player';

import develop from '@/assets/animations/development.json';
import { CircleCheck, LayoutDashboard, Settings } from 'lucide-react';

import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Convencing() {
	useEffect(() => {
		aos.init({ duration: 2000 });
	});

	return (
		<>
			<svg width='0' height='0'>
				<defs>
					<linearGradient id='icons' x1='0%' y1='0%' x2='100%' y2='100%'>
						<stop offset='0%' style={{ stopColor: 'var(--color-primary)', stopOpacity: 1 }} />
						<stop offset='100%' style={{ stopColor: 'var(--color-primary-300)', stopOpacity: 1 }} />
					</linearGradient>
				</defs>
			</svg>

			<section
				id='convencing'
				className='w-full flex justify-around items-center flex-wrap bg-section-background p-4 md:py-14 md:px-32'
			>
				<div className='mb-8'>
					<Lottie
						data-aos='fade-up'
						loop={true}
						play={true}
						className='max-w-[375px]'
						animationData={develop}
					/>
					<div data-aos='fade-up' data-aos-duration='1400'>
						<h2 className='text-2xl'>Lorem ipsum dolor sit amet</h2>
						<p className='text-default-text-strong max-w-[480px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed convallis mauris, non porta
							lectus. In nec justo arcu. Mauris a ornare dui. Phasellus laoreet arcu ac faucibus.
						</p>
					</div>
				</div>

				<div className='flex flex-col gap-8 max-w-96'>
					<section
						className='flex flex-col justify-center items-center md:block'
						data-aos='fade-up'
						data-aos-duration='1400'
					>
						<CircleCheck
							style={{
								stroke: 'url(#icons)',
							}}
							size={32}
							className='mb-2'
						/>
						<p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur</p>
						<p className='text-default-text-strong'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed convallis mauris, non porta
							lectus. In nec justo arcu. Mauris a ornare dui. Phasellus laoreet arcu ac faucibus.
						</p>
					</section>
					<section
						className='flex flex-col justify-center items-center md:block'
						data-aos='fade-up'
						data-aos-duration='1600'
					>
						<LayoutDashboard
							stroke='0'
							style={{
								fill: 'url(#icons)',
							}}
							size={32}
							className='mb-2'
						/>
						<p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur</p>
						<p className='text-default-text-strong'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed convallis mauris, non porta
							lectus. In nec justo arcu. Mauris a ornare dui. Phasellus laoreet arcu ac faucibus.
						</p>
					</section>
					<section
						className='flex flex-col justify-center items-center md:block'
						data-aos='fade-up'
						data-aos-duration='1800'
					>
						<Settings
							size={32}
							style={{
								stroke: 'url(#icons)',
							}}
							className='mb-2'
						/>
						<p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur</p>
						<p className='text-default-text-strong'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed convallis mauris, non porta
							lectus. In nec justo arcu. Mauris a ornare dui. Phasellus laoreet arcu ac faucibus.
						</p>
					</section>
				</div>
			</section>
		</>
	);
}
