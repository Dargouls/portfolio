'use client';

import { useEffect } from 'react';
import './locomotive-scroll.css';

export default function NewSmoothScroll({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return <div>{children}</div>;
}
