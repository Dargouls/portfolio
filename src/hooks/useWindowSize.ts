'use client';

import { useEffect, useState } from 'react';

export default function useWindowSize() {
	const getSize = () => {
		if (typeof window !== 'undefined') {
			return {
				width: window.innerWidth,
				height: window.innerHeight,
			};
		}
		return {
			width: 0,
			height: 0,
		};
	};

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const handleResize = () => {
			setWindowSize(getSize());
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
}
