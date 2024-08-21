'use client';

import '@/components/locomotiveScroll/locomotive-scroll.css';

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
		<div className='flex flex-col items-center justify-center gap-4'>
			<h1 className='absolute'>Anim</h1>
			<div className='h-screen w-screen bg-slate-600'></div>
			<div className='h-screen w-screen bg-slate-600'></div>
			<div className='h-screen w-screen bg-slate-600'></div>
			<div className='h-screen w-screen bg-slate-600'></div>
		</div>
	);
}
