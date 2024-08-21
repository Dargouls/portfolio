'use client';

import '@/components/newSmoothScroll/locomotive-scroll.css';
import { useEffect } from 'react';

export default function Anim() {
	useEffect(() => {
		console.log('useEffect');
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			const locomotiveScroll = new LocomotiveScroll();
			console.log('locomotive loaded');
		})();
	}, []);

	return (
		<div className='flex flex-col justify-center items-center gap-4'>
			<h1 className='absolute'>Anim</h1>
			<div className='w-screen h-screen bg-slate-600'></div>
			<div className='w-screen h-screen bg-slate-600'></div>
			<div className='w-screen h-screen bg-slate-600'></div>
			<div className='w-screen h-screen bg-slate-600'></div>
		</div>
	);
}
